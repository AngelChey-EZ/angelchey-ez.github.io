// Your list of sentences
  const facts = [
    "I eat noodle with soup in a plate.",
    "I have a sensitive tougue that can't take hot food.",
    "I hate bitterness so I don't enjoy coffee and alcohol.",
    "I have not finish a can of softdrink before as I could not take fizziness in my mouth.",
    "I can't drink coffee but I like coffee flavoured food.",
    "I don't eat noodles outside but I always eat noodles at home.",
    "Hot and spicy food is the worst combo for my mouth.",
    "I fell while I tried to balance standing on a ball when I was 8 and I don't dare to tell anyone so my wound did not get clean up in time which leaves a scare on my albow.",
    "Guava is my favourite fruit. There was a period of time I eat it everyday.",
    "I used to hate the smell popcorn so much that I have to cover my nose when passing by a cinema.",
    "I hate tea with sugur, but milk tea is ok.",
    "I hate almost all soy bean products."
  ];

  // Get the button and alert container
  const button = document.getElementById("randomBtn");
  const alertContainer = document.getElementById("alertContainer");

  button.addEventListener("click", function () {

    // Remove the previous alert
    alertContainer.innerHTML = "";

    // Pick a random sentence
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    // Create Bootstrap alert
    const alert = document.createElement("div");
    alert.className = "alert alert-info fs-5";
    alert.textContent = randomFact;

    // Add alert to the page
    alertContainer.appendChild(alert);
  });