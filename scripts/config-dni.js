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
    
    dni_elements.surname.innerText = localStorage.getItem('dni_surname') || 'MURADAS COIRO'
    dni_elements.name.innerText = localStorage.getItem('dni_name') || 'MATIAS MARTIN'
    dni_elements.sex.innerText = localStorage.getItem('dni_sex') || 'M'
    dni_elements.birth.innerText = localStorage.getItem('dni_birthdate') || '02 JUN/ JUN 2009'
    dni_elements.issue.innerText = localStorage.getItem('dni_emission') || '22 SET/ SET 2015'
    dni_elements.expiration.innerText = localStorage.getItem('dni_expiration') || '02 JUN/ JUN 2026'
    dni_elements.tramite_num.innerText = localStorage.getItem('dni_tramite_num') || '0123456789012345'
    dni_elements.ejemplar.innerText = localStorage.getItem('dni_ejemplar') || 'A'
    dni_elements.numero.innerText = localStorage.getItem('dni_numero') || '49.223.282'
    dni_elements.image.src = localStorage.getItem('dni_image') || 'https://media.discordapp.net/attachments/1293342794215325717/1304557925481713744/4WtsMyR.png?ex=672fd3be&is=672e823e&hm=35517488130023257622108534faff1920eb0d8c445b8267d49d2f28f39652c3&=&format=webp&quality=lossless'
    dni_elements.firma.src = localStorage.getItem('dni_firma') || 'https://media.discordapp.net/attachments/1293342794215325717/1304565789223026718/Sw9iSDM.png?ex=672fdb11&is=672e8991&hm=dd06da44bd10aae66b9e7d7f0df8472c7997ea9e80123c561af6f3d217ac3d41&=&format=webp&quality=lossless'
    dni_elements.address.innerHTML = '<font style="font-size: calc(7px * var(--dni-size-multiplier)); font-weight: 500; letter-spacing: 0;">DOMICILIO</font> ' + localStorage.getItem('dni_address') || 'Bragado 5939'
    dni_elements.mrz.innerText = localStorage.getItem('dni_mrz')
}
