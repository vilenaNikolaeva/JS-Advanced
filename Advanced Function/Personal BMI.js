function calculator(name, age, weight, height) {

    const bmi = Math.round(weight / (Math.pow(height / 100, 2)));

    const patientStatus = () => {
        if (bmi < 18.5) return 'underweight';
        else if (bmi >= 18.50 && bmi < 25) return 'normal';
        else if (bmi >= 25 && bmi < 30) return 'overweight';
        else if (bmi >= 30) return 'obase';
    }

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: bmi,
        status: patientStatus(),
    }
    if (patientStatus() === 'obase') {
        patient.recommendation = `admission required`;
    }

    console.log(patient);
}
calculator('Peter', 29, 75, 182);