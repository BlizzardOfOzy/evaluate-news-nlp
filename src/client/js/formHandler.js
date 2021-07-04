import axios from "axios"

async function handleSubmit(event) {
    const analyzeUrl = 'http://localhost:8081/analyze'
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('input').value

    console.log("::: Form Submitted :::")
    const response = await axios.post(analyzeUrl, {text: formText})
    document.getElementById('results').innerHTML = response.data.subjectivity
}

export { handleSubmit }
