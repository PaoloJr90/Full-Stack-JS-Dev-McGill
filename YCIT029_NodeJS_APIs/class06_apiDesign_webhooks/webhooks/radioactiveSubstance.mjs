import fetch from "node-fetch";
// create a class for radioactive substances. This class is the blueprint for the substance object that will be created
// use constructor to set the name and half-life
// this keyword is used to refer to the object itself
// the decay constant is calculated from the half-life
export class RadioActiveSubstance {
  constructor(name, halfLife, webhooks) {
    this.name = name;
    this.halfLife = halfLife;
    this.decayConstant = Math.log(2) / halfLife;
    this.webhooks = webhooks;
  }
  // create a method to start the radioactivity
  startRadioactivity() {
    setInterval(() => {
      if (this.randomDecayEvent()) {
        const data = {
          eventTime: new Date(),
          eventType: "radioactive substance decayed",
        };

        this.webhooks.forEach((webhookUrl) => {
          console.log(data);
          fetch(webhookUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
        });
      }
    }, 1000);
  }
  // create a method to generate a random number and compare it to the probability of decay
  randomDecayEvent() {
    const probability = 1 - Math.exp(-this.decayConstant);
    return Math.random() < probability;
  }
}

// create a new object from the class
// the constructor is called automatically
// the object is stored in the substance variable
// const substance = new RadioActiveSubstance("Sample no.1", 2);
// const substance2 = new RadioActiveSubstance("Sample no.2", 4);
// const substance3 = new RadioActiveSubstance("Sample no.3", 6);

// // call the startRadioactivity method on the object
// substance.startRadioactivity();
// substance2.startRadioactivity();
// substance3.startRadioactivity();
