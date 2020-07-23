using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using SimpleJSON;
using System.Text;
using System;

public class login : MonoBehaviour
{
    [SerializeField] GameObject loginPanel;
    [SerializeField] InputField username;
    [SerializeField] InputField password;
    [SerializeField] Button loginButton;
    [SerializeField] Button registerButton;
    [SerializeField] Text errorMessage;

    [SerializeField] GameObject registerPanel;
    [SerializeField] InputField registerEmail;
    [SerializeField] InputField registerUsername;
    [SerializeField] InputField registerPassword;

    [SerializeField] GameObject welcomePanel;
    [SerializeField] Text id;
    [SerializeField] Text token;

    [SerializeField] Text debug;

    private readonly string url = "http://www.rona.cards:4000/users/login";

    public void onRegisterButtonClicked()
    {
        // Switch to register page
        registerEmail.text = "";
        registerUsername.text = "";
        registerPassword.text = "";
        loginButton.interactable = false;
        registerButton.interactable = false;
        registerPanel.SetActive(true);
        loginPanel.SetActive(false);
        loginButton.interactable = true;
        registerButton.interactable = true;
    }

    public void onLoginButtonClicked()
    {
        // disable login button and start login API POST coroutine.
        loginButton.interactable = false;
        StartCoroutine(Login());
    }

    IEnumerator Login()
    {
        // Format username & password into JSON to be sent.
        string formData = "{\"username\":\"" + username.text + "\",\"password\":\"" + password.text + "\"}";
        byte[] jsonToSend = new UTF8Encoding().GetBytes(formData);

        // API POST
        var loginRequest = new UnityWebRequest(url, "POST");
        loginRequest.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend); // Sets send message.
        loginRequest.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer(); // Sets response message.
        loginRequest.SetRequestHeader("Content-Type", "application/json");

        // POST to server
        yield return loginRequest.SendWebRequest();

        // Check for errors
        if (loginRequest.isNetworkError || loginRequest.isHttpError)
        {
            // Check for known errors
            if (loginRequest.downloadHandler.text != null)
            {
                JSONNode errorInfo = JSON.Parse(loginRequest.downloadHandler.text);
                string errorString = errorInfo["msg"];
                debug.text = errorString;
                errorMessage.text = errorString;
                Debug.LogError(errorString);
            }
            else
            {
                errorMessage.text = loginRequest.error;
                Debug.LogError(loginRequest.error);
            }
        }
        else
        {
            // Check if communication with server is finished.
            if (loginRequest.isDone)
            {
                // Parse response message to get userID and token.
                JSONNode loginInfo = JSON.Parse(loginRequest.downloadHandler.text);
                id.text = loginInfo["user"]["id"];
                token.text = loginInfo["token"];
                
                // If login successful, change view to welcome Panel.
                welcomePanel.SetActive(true);
                loginPanel.SetActive(false);
            }
        }
        
        // Dispose of previous login attempt & re-enable login button.
        loginButton.interactable = true;
        loginRequest.Dispose();
    }
}
