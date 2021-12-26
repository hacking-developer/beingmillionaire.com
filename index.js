new Vue({
      el: "#app",
      data: {
        message: "",
        notification: false,
      },
      methods: {
        clicked: function() {
          this.notification = true;
          setTimeout(() => {
            this.message = "We are taking photos...";
          }, 0);
          setTimeout(() => {
            this.message = "We identifying the address from the IP address...";
          }, 1392);
          setTimeout(() => {
            this.message = "We identifying your credit card number...";
          }, 3319);
          setTimeout(() => {
            this.message = "We identifying the address from the IP address...";
          }, 5562);
          setTimeout(() => {
            this.message = "The entire process has been completed.";
          }, 7716);
          setTimeout(() => {
            location.href = "hack2.html";
          }, 8816);
        },
      },
    })
