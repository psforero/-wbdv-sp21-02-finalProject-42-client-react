import { GoogleSpreadsheet } from 'google-spreadsheet'

const SPREADSHEET_ID = '1nGiiLmtczjO9BaFoSXE4IKQX5EKxqhQ-zLbTpfwGTQU';
const CLIENT_EMAIL = 'webdevprojectprototype@webdevprojectprototype.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChGiNQFIs8QisX\naGdZRBhJ6OsYRqNfDFdfhWbj6UmKNEOICu6e8dd0c+3jnXdLAfOncdDZoMn+FcIe\nQHNHeJuTCj5NEd93H+Qc/4r2eO/9Ufh0+fMh7XCI7xsdXiksBI6O6+I5ju7N+aB1\ns/tw0bHdTZhSCfLvMbJtvqkUYLQkddc2DHeHms2qyVhI0AqSjg48KhZ0TbzcrVdM\nSQpOCwsXBRXgzO+SvTqHiLpXctJhdnUk22ErR1ADTVtvZkB5nTXDWELWgTuBurmY\nWwHcAkWf9KQIaPQWtjvVUI5J1air/g2x4NKLd4NB+lWuCStex3FE0NSi3ePIh/KI\nHgAoLoG3AgMBAAECggEABaD19n7q3BPskRvOIjNPE4rQAMzvBliJcPmM18FRFxAU\nz/SgOiBCO+Jh2Tl2PCh5GX+dIXPZuuC9vVrZH3haTy/lCPWEtKybk47/wI7T+JDc\nBavgaW4NwYSnknlPJo33zfL164O2Wkhl6XB8ne6yfTeQO98qUSspjDLeK3hMsv1d\nnLIlDR+2AYojNvjx0VK2aHCQffOeR2I7MxFGCpvw3JzFcTKQMnKiVAV+KS7OTt5D\nhgn1Voz5fY7yNfAq3zyhmIVSE9rQYuiw+3RJnpV2O8+zhy9SNSO9g/FcYp4YbjEf\nmEiyJf5TUJ7m5t6F8dYu3nacaBFrQfazA6XaJmm8OQKBgQDaMYTcrov2/gWVUC10\n24wevsX0z8FNsyS+baGUwh6209tZtY7RwYSgAKECsZw6jb1Z4NAJa854gj7U1BvE\nmgYGp+nU6elFuHeE35PpiExRAIHLRxpJyO7mMjVNOByOuzJOorh8sKq3o47oVYwA\nCbcvwYMlAMFtWdRFZfnQ5ELaDQKBgQC9BDL6YnburxL3SApE9xlmHXg9n+KmrpX4\nZzLcnfg9NuI4t8Ch8QN6lzQIvTsGMBhzWlP+OoG20j3uulRBCy5bRglcu2nk0tLt\nEGBjHQJQKBkZrdOBzZJyZ7tnns5LFAShuNZzBkgwM0S7BxLBnlhsGoPyMLLAsSki\n0fNq6iKt0wKBgEXs9sJuoeZ/FDT85AR+U9KKmxBRAIcxMUZiBhWRfJxlGvgOCn5I\ngYNxkCg32XSedh92v9U1Go9eVlqIu3lvTx0U9QhKCntQmeUYbeO6zZJsEiyeVdtt\nrLpTPufHYsePUJkI5wz25U9C+IqW1+4vLuj8IFZcfqDX2AKBouUCMjaFAoGAJiAJ\ntE1WFfDET5J9V8nLmrhI/40XZ22BnHgcXzmRz68ZVD1kIoX9oKWM/lJE7IuY8vN+\nS6I7dcfUbCmzQudhc1GeI9E9m8UWfHC4MGWyiL59yZsxNVZkuqTHvS/gBm7EPGaP\nAuZ6exZsP5k+pEUvKqbyhFBkTc+uL3LPuXn+grcCgYAEJw0Iz7RCh4H0710MEA6r\n22SPXDWAo84sNreBc9Yp7ZC4/aFdy2aKYmcZfIHKWaR0BAIKo+wHZoDrzU164TYu\nSBNv0CLeENW5Iz8UKW2QJEwqK8TGIE3F3eFFHpq01vprcoQyc5MBiTw5YJ7hPLyT\n6Gs8RzdoCAkX30O0VRPAbA==\n-----END PRIVATE KEY-----\n"

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const getAdvisoryRows = async (advisory) => {
  try {
     await doc.useServiceAccountAuth({
       client_email: CLIENT_EMAIL,
       private_key: PRIVATE_KEY,
     });

     await doc.loadInfo();

    return await doc.sheetsByTitle[advisory].getRows()

  } catch (e) {
    console.error('Error:', e);
  }
}

const getAllStudents = async (advisories) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo();

    const temp = [];

    for (let advisory in advisories) {
      let rows = await doc.sheetsByTitle[advisory].getRows();
      for(let row in rows){
        let studentInfo = rows[row]._rawData
        let student = {};
        student['Name'] = studentInfo[0]
        student['Math'] = studentInfo[1]
        student['English'] = studentInfo[2]
        student['Spanish'] = studentInfo[3]
        student['Advisor'] = advisory
        temp.push(student)
      }
    }
    return temp;

  } catch (e) {
    console.error('Error:', e);
  }
}

const getAdvisoryList = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo();

    return await doc.sheetsByTitle;

  } catch (e) {
    console.error('Error:', e);
  }
}

const api = {
  getAdvisoryRows,
  getAdvisoryList,
  getAllStudents
};

export default api;