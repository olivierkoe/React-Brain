export function inscriptionValidation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "Veuillez entré un nom"
    }
    else {
        error.name = ""
    }

    if (values.mail === "") {
        error.mail = "Veuillez entré une adress mail"
    }

    else if (!email_pattern.test(values.email)) {
        error.email = "Email ou password non conforme"
    }

    else {
        error.mail = ""
    }

    if (values.password === "") {
        error.password = "Veuillez entré une adress password"
    }

    else if (!password_pattern.test(values.password)) {
        error.password = "Email ou password non conforme"
    }

    else {
        error.password = ""
    }

    return error;
}
