import ErrorClass from "./ErrorClass";

class ClientAPI
{
    //static baseUrl = "http://localhost:3001";
    static baseUrl = "https://maciejdominiak-mvc.herokuapp.com";

    onErrorFunction = null;
    onSuccessFunction = null;

    sendMessage (method, url, jsonData=null, headers = {})
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), ClientAPI.baseUrl+url, true);
        xhr.timeout = 5000;

        let response = null;

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4)
            {
                if(xhr.status===200)
                {
                    response = xhr.responseText;
                    response = this.jsonToData(response);
                }
                else
                {
                    if(xhr.status!==0)
                    {
                        let error = new ErrorClass(xhr.status, xhr.statusText);
                        this.onError(error);
                        response = null;
                    }
                }
                this.onSuccess(response);
            }
        }
        xhr.ontimeout = (e) => {
            this.onError(new ErrorClass(404, "Zbyt długi czas oczekiwania na odpoweidź"))
        }
        xhr.onabort = (e) => {
            this.onError(new ErrorClass(404, "Zatrzymano zapytanie z nieznanych przyczyn"))
        }
        xhr.onerror = (e) => {
            this.onError(new ErrorClass(404, "Brak Internetu."));
        }

        let headersKeys = Object.keys(headers);
        for(let i=0;i<headersKeys.length;i++)
        {
            let key = headersKeys[i];
            xhr.setRequestHeader(key+"",headers[key]+"");
        }

        xhr.send(jsonData);
    }

    onSuccess(response)
    {
        if(this.onSuccessFunction!==null)
        {
            this.onSuccessFunction(response)
        }
    }

    onError(errorInfo)
    {
        if(this.onErrorFunction!==null)
        {
            this.onErrorFunction(errorInfo);
        }
    }

    dataToJson(data)
    {
        try{
            return JSON.stringify(data);
        } catch(error) {
            this.onError(new ErrorClass(404, "Błąd konwersji danych do typu JSON"));
        }
    }

    jsonToData(jsonData)
    {
        try{
            return JSON.parse(jsonData);
        } catch(error) {
            this.onError(new ErrorClass(404, "Błąd konwersji typu JSON na dane"));
        }
    }

    ageRequest(age,sex,smoke,live,weight,height, callback, errorCallback)
    {
        this.onSuccessFunction = callback;
        this.onErrorFunction = errorCallback;
        this.sendMessage("GET", "/"+age+"/"+sex+"/"+smoke+"/"+live+"/"+weight+"/"+height)
    }
}


export default ClientAPI;