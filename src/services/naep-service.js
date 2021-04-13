const NAEP_URL = "https://www.nationsreportcard.gov/DataService/GetAdhocData.aspx"

export const findAvgScores=
    (subject,
     grade,
     jurisdiction,
     year) =>
    fetch(`${NAEP_URL}?type=data&subject=${subject}&grade=${grade}&variable=TOTAL&jurisdiction=${jurisdiction}&stattype=MN:MN&Year=${year}`)
        .then(response => response.json().catch(() => ({"status": 400, "result":[]})))

export default {
    findAvgScores
};