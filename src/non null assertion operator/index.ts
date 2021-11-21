type Person3 {
  name: string;
  email?: string | null | undefined;
}

function sendEmail(email: string) {
  console.log(`Sending email to ${email}`);
}

function contract(person: Person3) {

  if (person.email == null) {
    throw new Error("Email cannot be null");
  }

  sendEmail(person.email);

  
}