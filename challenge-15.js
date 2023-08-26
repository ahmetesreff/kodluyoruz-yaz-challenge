function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    
    const age = today.getFullYear() - birthDateObj.getFullYear() - 
                ((today.getMonth() < birthDateObj.getMonth() || 
                (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) ? 1 : 0);
    
    return age;
}

const ageInput = prompt("Yaşınızı gg.aa.yyyy formatında giriniz:");

const ageParts = ageInput.split('.');
const birthDate = `${ageParts[2]}-${ageParts[1]}-${ageParts[0]}`;

const age = calculateAge(birthDate);
console.log("Yaşınız:", age);

