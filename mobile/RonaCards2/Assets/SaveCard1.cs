using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using SimpleJSON;
using System.Text;
using System;

public class SaveCard1 : MonoBehaviour
{
    [SerializeField] Button saveButton;
    [SerializeField] Text saveText;
    [SerializeField] Text errorMessage;

    [SerializeField] Text id;
    [SerializeField] Text token;

    private readonly string url = "http://www.rona.cards:4000/users/update";

    public void onSaveButtonClicked()
    {
        StartCoroutine(SaveCardOne());
    }
    
    IEnumerator SaveCardOne()
    {
        // Format username, email, & password into JSON to be sent.
        string formData = "{\"card1\":\"true\"}";
        byte[] jsonToSend = new UTF8Encoding().GetBytes(formData);

        // API POST
        var saveRequest = new UnityWebRequest(url, "PUT");
        saveRequest.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend); // Sets send message.
        saveRequest.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer(); // Sets response message.
        saveRequest.SetRequestHeader("Content-Type", "application/json");
        saveRequest.SetRequestHeader("x-auth-token", token.text);

        // POST to server
        yield return saveRequest.SendWebRequest();

        // Check for errors
        if (saveRequest.isNetworkError || saveRequest.isHttpError)
        {
            // Check for known errors
            if (saveRequest.downloadHandler.text != null)
            {
                JSONNode errorInfo = JSON.Parse(saveRequest.downloadHandler.text);
                string errorString = saveRequest.downloadHandler.text;
                errorMessage.text = errorString;
                Debug.LogError(errorString);
            }
            else
            {
                errorMessage.text = saveRequest.error;
                Debug.LogError(saveRequest.error);
            }
        }
        else
        {
            // Check if communication with server is finished.
            if (saveRequest.isDone)
            {
                // Parse response message to get userID and token.
                JSONNode registerInfo = JSON.Parse(saveRequest.downloadHandler.text);
                
                // If save successful, change text to "Card Saved".
                saveButton.interactable = false;
                saveText.text = "Card Collected!";
            }
        }
        
        // Dispose of previous save requests.
        saveRequest.Dispose();
    }
}
