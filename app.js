document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form')
  const schema = document.getElementById('schema')
  const addProfile = document.getElementById('add-profile')
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    const fd = new FormData(form)
    const profiles = []

    for (let i = 1; i <= profileCount; i++) {
      profiles.push({
        "network": fd.get(`network${i}`),
        "username": fd.get(`username${i}`),
        "url": fd.get(`url${i}`),
      })
    }
    
    schema.innerHTML = JSON.stringify({
      "basics": {
        "name": fd.get("name"),
        "label": fd.get("label"),
        "picture": fd.get("picture"),
        "email": fd.get("email"),
        "phone": fd.get("phone"),
        "website": fd.get("website"),
        "summary": fd.get("summary"),
        "location": {
          "address": fd.get("address"),
          "postalCode": fd.get("postalCode"),
          "city": fd.get("city"),
          "countryCode": fd.get("countryCode"),
          "region": fd.get("region")
        },
        "profiles": profiles
      }
    })
    
  })

  let profileCount = 0;
  addProfile.addEventListener('click', e => {
    e.preventDefault()
    profileCount++

    document.querySelector('div#profiles').innerHTML += `
      <div>
        <div>
          <label for="network">Network:</label>
          <input name="network${profileCount}" id="network${profileCount}" type="text" >
        </div>
        <div>
          <label for="username">Username:</label>
          <input name="username${profileCount}" id="username${profileCount}" type="text" >
        </div>
        <div>
          <label for="url">Url:</label>
          <input name="url${profileCount}" id="url${profileCount}" type="text" >
        </div>
      </div>
    `
  })
})
