function config() {

    let dni_elements = {
        numero: document.getElementById("dni-number") || {},
        surname: document.getElementById("dni-surname") || {},
        name: document.getElementById("dni-name") || {},
        sex: document.getElementById("dni-sex") || {},
        birth: document.getElementById("dni-birth") || {},
        issue: document.getElementById("dni-issue") || {},
        expiration: document.getElementById("dni-expiration") || {},
        tramite_num: document.getElementById("dni-tramite-num") || {},
        ejemplar: document.getElementById('dni-ejemplar') || {},
        image: document.getElementById('dni-image') || {},
        address: document.getElementById('dni-address') || {},
        mrz: document.getElementById('dni-mrz') || {},
        firma: document.getElementById('dni-firma')
    }
    
    dni_elements.surname.innerText = localStorage.getItem('dni_surname') || 'MARZAROLI DI MEO'
    dni_elements.name.innerText = localStorage.getItem('dni_name') || 'FAUSTO'
    dni_elements.sex.innerText = localStorage.getItem('dni_sex') || 'M'
    dni_elements.birth.innerText = localStorage.getItem('dni_birthdate') || '08 ABR/ APR 2009'
    dni_elements.issue.innerText = localStorage.getItem('dni_emission') || '11 JUN/ JUN 2015'
    dni_elements.expiration.innerText = localStorage.getItem('dni_expiration') || '08 ABR/ APR 2026'
    dni_elements.tramite_num.innerText = localStorage.getItem('dni_tramite_num') || '0123456789012345'
    dni_elements.ejemplar.innerText = localStorage.getItem('dni_ejemplar') || 'A'
    dni_elements.numero.innerText = localStorage.getItem('dni_numero') || '49.257.553'
    dni_elements.image.src = localStorage.getItem('dni_image') || 'https://media.discordapp.net/attachments/1293342794215325717/1304562923426807899/uTkwyxq.png?ex=672fd866&is=672e86e6&hm=82fbf01c3e28e782970f553b880bf0c357f98252ffe37fc7cdc5575f4b669ae5&=&format=webp&quality=lossless&width=293&height=350'
    dni_elements.firma.src = localStorage.getItem('dni_firma') || 'https://media.discordapp.net/attachments/1293342794215325717/1304565788950401104/dYyxHO1.png?ex=672fdb11&is=672e8991&hm=8e082a7b7ade52c47984ced9649c71b5be44242879d6889f032e4e61cf5f0a17&=&format=webp&quality=lossless'
    dni_elements.address.innerHTML = '<font style="font-size: calc(7px * var(--dni-size-multiplier)); font-weight: 500; letter-spacing: 0;">DOMICILIO</font> ' + localStorage.getItem('dni_address') || 'Cap Rojas 3701'
    dni_elements.mrz.innerText = localStorage.getItem('dni_mrz')
}
