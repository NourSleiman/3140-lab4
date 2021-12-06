//getActivity get an activity from the api https://www.boredapi.com/ based on the user input

async function getActivity() {
  //assign variables to the values of the inputs
  let type = document.getElementById("type").value;
  let participants = document.getElementById("participants").value;
  let minPrice = document.getElementById("minprice").value;
  let maxPrice = document.getElementById("maxprice").value;
  let minAccess = document.getElementById("minaccessibility").value;
  let maxAccess = document.getElementById("maxaccessibility").value;

  let link = "";
  if (type == "Any") {
    link =
      "?participants=" +
      participants +
      "&minprice=" +
      minPrice +
      "&maxprice=" +
      maxPrice +
      "&minaccessibility=" +
      minAccess +
      "&maxaccessibility=" +
      maxAccess;
  } else {
    link =
      "?type=" +
      type +
      "&participants=" +
      participants +
      "&minprice=" +
      minPrice +
      "&maxprice=" +
      maxPrice +
      "&minaccessibility=" +
      minAccess +
      "&maxaccessibility=" +
      maxAccess;
  }

  //fetch request to the api that waits until it is fulfilled to return the data
  let response = await fetch("https://www.boredapi.com/api/activity" + link);
  let activity = await response.json();

  //if no activity is found based on the parameters, return the error message of the api
  if (activity["activity"] == undefined) {
    document.getElementById("response").innerHTML = activity["error"];
  }
  //else, return the activity
  else {
    document.getElementById("response").innerHTML = activity["activity"];
  }
}
