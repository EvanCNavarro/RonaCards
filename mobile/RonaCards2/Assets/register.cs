using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using SimpleJSON;
using System.Text;
using System;

public class register : MonoBehaviour
{
    [SerializeField] GameObject loginPanel;
    [SerializeField] InputField loginUsername;
    [SerializeField] InputField loginPassword;

    [SerializeField] Text loginErrorMessage;

    [SerializeField] GameObject registerPanel;
    [SerializeField] InputField email;
    [SerializeField] InputField username;
    [SerializeField] InputField password;
    [SerializeField] Button registerButton;
    [SerializeField] Button loginButton;
    [SerializeField] Text errorMessage;

    [SerializeField] Text id;
    [SerializeField] Text token;

    private readonly string url = "http://www.rona.cards:4000/users/register";

    public void onLoginButtonClicked()
    {
        loginUsername.text = username.text;
        loginPassword.text = password.text;
        loginPanel.SetActive(true);
        registerPanel.SetActive(false);
    }

    public void onRegisterButtonClicked()
    {
        loginButton.interactable = false;
        registerButton.interactable = false;
        StartCoroutine(Register());
    }

    IEnumerator Register()
    {

        // Format username, email, & password into JSON to be sent.
        string formData = "{\"username\":\"" + username.text + "\",\"email\":\"" + email.text + "\",\"password\":\"" + password.text + "\"}";
        byte[] jsonToSend = new UTF8Encoding().GetBytes(formData);

        // API POST
        var registerRequest = new UnityWebRequest(url, "POST");
        registerRequest.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend); // Sets send message.
        registerRequest.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer(); // Sets response message.
        registerRequest.SetRequestHeader("Content-Type", "application/json");

        // POST to server
        yield return registerRequest.SendWebRequest();

        // Check for errors
        if (registerRequest.isNetworkError || registerRequest.isHttpError)
        {
            // Check for known errors
            if (registerRequest.downloadHandler.text != null)
            {
                // JSONNode errorInfo = JSON.Parse(registerRequest.downloadHandler.text);
                errorMessage.text = "Known error 2";
                string errorString = registerRequest.downloadHandler.text;
                errorMessage.text = "Known error 3";
                errorMessage.text = errorString;
                Debug.LogError(errorString);
            }
            else
            {
                errorMessage.text = "unknown error";
                errorMessage.text = registerRequest.error;
                Debug.LogError(registerRequest.error);
            }
        }
        else
        {
            errorMessage.text = "No errors";
            // Check if communication with server is finished.
            if (registerRequest.isDone)
            {
                // Parse response message to get userID and token.
                JSONNode registerInfo = JSON.Parse(registerRequest.downloadHandler.text);
                id.text = registerInfo["user"]["id"];
                token.text = registerInfo["token"];

                errorMessage.text = "JSON parsed";

                // If register successful, change view to login Panel.
                loginPanel.SetActive(true);
                registerPanel.SetActive(false);

                errorMessage.text = "view changed";
            }
        }

        // debug.text = "dispose";
        // Dispose of previous login attempt & re-enable login button.
        loginButton.interactable = true;
        registerButton.interactable = true;
        registerRequest.Dispose();
    }
}
