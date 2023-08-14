const Udataa = localStorage.getItem("userData");
const dataEstimate = JSON.parse(Udataa);
const objctID = dataEstimate.objectId;
const usertoken = dataEstimate.token;

// Set  dropdown values 

// function updateDropdowns(selectedContractId) {
//     fetchServices(selectedContractId);
//     fetchRateCards(selectedContractId);
// }
// function fetchServices(selectedContractId) {
//     fetch("https://cleanstation.backendless.app/api/services/Estimate/ContractIDToServices?ID=" + selectedContractId)
//         .then(response => response.json())
//         .then(data => {
//             var temp = "";
//             if (data.length === 0) {
//                 temp = "<option disabled>No data found</option>";
//             } else {
//                 temp = "<option selected disabled>Select Service Name</option>";
//                 data.forEach(service => {
//                     service.Carrier_Services.forEach(subService => {
//                         temp += "<option value='" + subService.objectId + "'>" + subService.Name + " (" + subService.Weight_Unit + ")" + "</option>";
//                         localStorage.setItem(subService.objectId, JSON.stringify({ weightRange: subService.Weight_Range, weightUnit: subService.Weight_Unit }));
//                     });
//                 });
//             }

//             document.getElementById('services').innerHTML = temp;

//             // Check if a previously selected service is stored in Local Storage
//             const selectedServiceId = localStorage.getItem('serviceSelectId');
//             if (selectedServiceId) {
//                 const serviceSelect = document.getElementById('services');
//                 // Set the previously selected service as the default selected option
//                 serviceSelect.value = selectedServiceId;
//                 localStorage.setItem('selectedServiceName', serviceSelect.options[serviceSelect.selectedIndex].text);
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             document.getElementById('services').innerHTML = "<option disabled>No data found</option>";
//         });
// }

// function fetchRateCards(selectedContractId) {
//     fetch("https://cleanstation.backendless.app/api/services/Estimate/ContractIDToServices?ID=" + selectedContractId)
//         .then(response => response.json())
//         .then(data => {
//             var temp = "";
//             if (data.length === 0) {
//                 temp = "<option disabled>No data found</option>";
//             } else {
//                 temp = "<option selected disabled>Select Rate Card</option>";
//                 data.forEach(service => {
//                     temp += "<option value='" + service.objectId + "'>" + service.Rate_Card_Name + "</option>";
//                 });
//             }

//             document.getElementById('rateCard').innerHTML = temp;

//             // Check if a previously selected rate card is stored in Local Storage
//             const selectedRateCard = localStorage.getItem('rateCardSelectId');
//             if (selectedRateCard) {
//                 const rateCardSelect = document.getElementById('rateCard');
//                 // Set the previously selected rate card as the default selected option
//                 rateCardSelect.value = selectedRateCard;
//                 localStorage.setItem('selectedRateCardName', rateCardSelect.options[rateCardSelect.selectedIndex].text);
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             document.getElementById('rateCard').innerHTML = "<option disabled>No data found</option>";
//         });
// }

// fetch("https://cleanstation.backendless.app/api/services/Brand/BrandContract", {
//     method: "POST",
//     body: JSON.stringify({ objectId: objctID }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
// })
//     .then(response => response.json())
//     .then(data => {
//         var temp = "";
//         data.forEach(contract => {
//             temp += "<option value='" + contract.objectId + "'>" + contract.Contract_name + "</option>";
//         });

//         document.getElementById('contract').innerHTML = temp;

//         const selectedContractId = localStorage.getItem('selectedContractId');
//         if (selectedContractId) {
//             const contractSelect = document.getElementById('contract');
//             contractSelect.value = selectedContractId;
//             localStorage.setItem('selectedContractName', contractSelect.options[contractSelect.selectedIndex].text);
//             updateDropdowns(selectedContractId);
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Something went wrong");
//     });

// document.getElementById('contract').addEventListener('change', function () {
//     const selectedContractId = this.value;
//     localStorage.setItem('selectedContractId', selectedContractId); // Set in local storage
//     localStorage.setItem('selectedServiceName', ""); // Clear service name
//     localStorage.setItem('selectedRateCardName', ""); // Clear rate card name
//     updateDropdowns(selectedContractId);
// });

// document.getElementById('services').addEventListener('change', function () {
//     const selectedServiceId = this.value;
//     localStorage.setItem('serviceID', selectedServiceId); // Set in local storage
//     // Retrieve Weight_Range and Weight_Unit from local storage using the selected service ID
//     const weightData = JSON.parse(localStorage.getItem(selectedServiceId));

//     if (weightData !== null) {
//         localStorage.setItem('selectedServiceWeightRange', weightData.weightRange); // Set Weight_Range in local storage
//         localStorage.setItem('selectedServiceWeightUnit', weightData.weightUnit); // Set Weight_Unit in local storage
//     }
// });

// document.getElementById('rateCard').addEventListener('change', function () {
//     const selectedRateCardId = this.value;
//     localStorage.setItem('rateCardSelectId', selectedRateCardId); // Set in local storage
//     localStorage.setItem('selectedRateCardName', this.options[this.selectedIndex].text); // Set selected rate card name
// });

function updateDropdowns(selectedContractId) {
    fetchServices(selectedContractId);
    fetchRateCards(selectedContractId);
}

function fetchServices(selectedContractId) {
    fetch("https://cleanstation.backendless.app/api/services/Estimate/ContractIDToServices?ID=" + selectedContractId)
        .then(response => response.json())
        .then(data => {
            var temp = "";
            if (data.length === 0) {
                temp = "<option disabled>No data found</option>";
            } else {
                temp = "<option selected disabled>Select Service Name</option>";
                data.forEach(service => {
                    service.Carrier_Services.forEach(subService => {
                        // temp += "<option value='" + subService.objectId + "'>" + subService.Name + " (" + subService.Weight_Unit + ")" + "</option>";
                        // localStorage.setItem(subService.objectId, subService.Weight_Range);
                        temp += "<option value='" + subService.objectId + "'>" + subService.Name + " (" + subService.Weight_Unit + ")" + "</option>";
                        localStorage.setItem(subService.objectId, JSON.stringify({ weightRange: subService.Weight_Range, weightUnit: subService.Weight_Unit }));
                    });
                });
            }

            document.getElementById('services').innerHTML = temp;

            // Check if a previously selected service is stored in Local Storage
            const selectedServiceId = localStorage.getItem('serviceSelectId');
            if (selectedServiceId) {
                const serviceSelect = document.getElementById('services');
                // Set the previously selected service as the default selected option
                serviceSelect.value = selectedServiceId;
                localStorage.setItem('selectedServiceName', serviceSelect.options[serviceSelect.selectedIndex].text);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById('services').innerHTML = "<option disabled>No data found</option>";
        });
}

function fetchRateCards(selectedContractId) {
    fetch("https://cleanstation.backendless.app/api/services/Estimate/ContractIDToServices?ID=" + selectedContractId)
        .then(response => response.json())
        .then(data => {
            var temp = "";
            if (data.length === 0) {
                temp = "<option disabled>No data found</option>";
            } else {
                temp = "<option selected disabled>Select Rate Card</option>";
                data.forEach(service => {
                    temp += "<option value='" + service.objectId + "'>" + service.Rate_Card_Name + "</option>";
                });
            }

            document.getElementById('rateCard').innerHTML = temp;

            // Check if a previously selected rate card is stored in Local Storage
            const selectedRateCard = localStorage.getItem('rateCardSelectId');
            if (selectedRateCard) {
                const rateCardSelect = document.getElementById('rateCard');
                // Set the previously selected rate card as the default selected option
                rateCardSelect.value = selectedRateCard;
                localStorage.setItem('selectedRateCardName', rateCardSelect.options[rateCardSelect.selectedIndex].text);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById('rateCard').innerHTML = "<option disabled>No data found</option>";
        });
}

fetch("https://cleanstation.backendless.app/api/services/Brand/BrandContract", {
    method: "POST",
    body: JSON.stringify({ objectId: objctID }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then(response => response.json())
    .then(data => {
        var temp = "";
        data.forEach(contract => {
            temp += "<option value='" + contract.objectId + "'>" + contract.Contract_name + "</option>";
        });

        document.getElementById('contract').innerHTML = temp;

        const selectedContractId = localStorage.getItem('selectedContractId');
        if (selectedContractId) {
            const contractSelect = document.getElementById('contract');
            contractSelect.value = selectedContractId;
            localStorage.setItem('selectedContractName', contractSelect.options[contractSelect.selectedIndex].text);
            updateDropdowns(selectedContractId);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong");
    });

document.getElementById('contract').addEventListener('change', function () {
    const selectedContractId = this.value;
    localStorage.setItem('selectedContractId', selectedContractId); // Set in local storage
    localStorage.setItem('selectedServiceName', ""); // Clear service name
    localStorage.setItem('selectedRateCardName', ""); // Clear rate card name
    updateDropdowns(selectedContractId);
});


document.getElementById('services').addEventListener('change', function () {
    const selectedServiceId = this.value;
    localStorage.setItem('serviceID', selectedServiceId); // Set in local storage

    // Retrieve Weight_Range and Weight_Unit from local storage using the selected service ID
    const weightData = JSON.parse(localStorage.getItem(selectedServiceId));
    if (weightData !== null) {
        localStorage.setItem('selectedServiceWeightRange', weightData.weightRange); // Set Weight_Range in local storage
        localStorage.setItem('selectedServiceWeightUnit', weightData.weightUnit); // Set Weight_Unit in local storage
    }
});

document.getElementById('rateCard').addEventListener('change', function () {
    const selectedRateCardId = this.value;
    localStorage.setItem('rateCardSelectId', selectedRateCardId); // Set in local storage
    localStorage.setItem('selectedRateCardName', this.options[this.selectedIndex].text); // Set selected rate card name
});





const calculateAndShowData = async () => {
    const selectedServiceId = document.getElementById('services').value;
    const userWeightZone = parseInt(document.getElementById('ESTzonerangeinput').value);
    const userWeight = parseFloat(document.getElementById('ESTweightrangeinput').value);

    const selectedServiceObject = JSON.parse(localStorage.getItem(selectedServiceId));
    if (!selectedServiceObject) {
        console.error("Selected service's object ID not found in local storage");
        return;
    }

    const weightUnit = selectedServiceObject.weightUnit;

    const apiUrl = `https://cleanstation.backendless.app/api/services/Estimate/ServiceIDToZone?ID=${selectedServiceId}`;

    try {
        const response = await fetch(apiUrl);
        const apiResponse = await response.json();

        if (!Array.isArray(apiResponse)) {
            console.error("API response is not an array:", apiResponse);
            return;
        }

        const dataToShow = extractDataFromApiResponse(apiResponse, userWeightZone, userWeight, weightUnit);
        updateDataUI(dataToShow);
    } catch (error) {
        console.error("API Error:", error);
        // Handle error and update UI accordingly
    }
};

document.getElementById('ESTzonerangeinput').addEventListener('input', calculateAndShowData);
document.getElementById('ESTweightrangeinput').addEventListener('input', calculateAndShowData);





function extractDataFromApiResponse(apiResponse, userWeightZone, userWeight, weightUnit) {
    for (const obj of apiResponse) {
        if (obj[`Weight_${weightUnit}`] === userWeight && obj[`Zone_${userWeightZone}`] !== undefined) {
            return obj[`Zone_${userWeightZone}`];
        }
    }

    return "Value not found";
}

function updateDataUI(dataToShow) {
    const dataResultDiv = document.getElementById('dataResult');
    dataResultDiv.innerText = ` ${dataToShow}`;
}












// End here

// set estimate name  startdate and end date in nextPAge

$(document).ready(function () {
    $("#createEstimateButton").click(function () {
        let estimateNameInput = $("#estimateNameInput").val().trim();
        let estimateStartDate = $("#estimateStartDate").val().trim();
        let estimateEndDate = $("#estimateEndDate").val().trim();
        let contract = $("#contract").val().trim();
        let services = $("#services").val().trim();
        let rateCard = $("#rateCard").val().trim();
        const estimateErrormsg = document.getElementById("estimateErrormsg");

        // Calculate the difference in days
        let startDate = new Date(estimateStartDate);
        let endDate = new Date(estimateEndDate);
        let timeDifference = endDate - startDate;
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // get Contract name
        var contractName = $("#contract option:selected").text();
        // get RatecardName name
        var ratecardName = $("#rateCard option:selected").text();
        // get service name
        var serviceName = $("#services option:selected").text();


        if (estimateNameInput !== "" && estimateStartDate !== "" && estimateEndDate !== "" && contract !== "" && services !== "" && rateCard !== "") {
            // Set values in the next page
            $("#EstimateContractNametext").text(estimateNameInput);
            $("#EstimateStartDate").text(estimateStartDate);
            $("#EstimateEndDate").text(estimateEndDate);
            $("#EstimateFCNameText").text(contractName);
            $("#EstimateRCNameText").text(ratecardName);
            $("#EstimateServiceNameText").text(serviceName);
            $("#EstimateFCtotalDays").text(daysDifference);


            $("#EstimateDetailSectionBlock").show();
            $("#EstimatemainSection").hide();
            $("#createEstimateSection").hide();

        } else {
            const estimateErrormsg = document.getElementById("estimateErrormsg");
            estimateErrormsg.textContent = "Please fill all required fields"; // Set the error message text
            estimateErrormsg.style.color = "red"; // Set the color to red
            estimateErrormsg.style.display = "block";
        }

    });
});


// Create Estimate ****
$("#ESTcreateunitbutton").click(function () {
    let Estmate_name = $("#EstimateContractNametext").text().trim();
    let Start_Date = $("#EstimateStartDate").text().trim();
    let End_Date = $("#EstimateEndDate").text().trim();
    let contractId = localStorage.getItem("selectedContractId");
    let serviceId = localStorage.getItem("serviceID");

    // Reciving
    let ReceiptPallet = $("#ESTpalletsreceivedinput").val().trim();
    let ReceiptCase = $("#ESTcasesreceivedinput").val().trim();

    // Storage
    let Pallets = $("#ESTpalletstorageinput").val().trim();
    let Shelfs = $("#ESTshelfstorageinput").val().trim();
    let Bins = $("#ESTbinstorageinput").val().trim();

    // Picking
    let TotalOrders = $("#ESTbaseordersinput").val().trim();
    let ExtraPicks = $("#ESTbasketsizeinput").val().trim();
    let Returns = $("#ESTbasereturnsinput").val().trim();
    let KitsBuilt = $("#ESTkitscreatedinput").val().trim();

    // Misc
    let WHHours = $("#ESTwarehousehoursinput").val().trim();
    let OTHours = $("#ESTOThoursinput").val().trim();
    let ITHours = $("#ESTIThours").val().trim();

    let Average_Cost = $("#dataResult").text().trim();

    let estimateData =
    {
        Estimate_Name: Estmate_name,
        Start_Date: Start_Date,
        End_Date: End_Date,
        ReceiptPallet: parseFloat(ReceiptPallet) ?? 0,
        ReceiptCase: parseFloat(ReceiptCase) ?? 0,
        Pallets: parseFloat(Pallets) ?? 0,
        Shelf: parseFloat(Shelfs) ?? 0,
        Bins: parseFloat(Bins) ?? 0,
        TotalOrders: parseFloat(TotalOrders) ?? 0,
        ExtraPicks: parseFloat(ExtraPicks) ?? 0,
        Returns: parseFloat(Returns) ?? 0,
        KitsBuilt: parseFloat(KitsBuilt) ?? 0,
        WHHours: parseFloat(WHHours) ?? 0,
        OTHours: parseFloat(OTHours) ?? 0,
        ITHours: parseFloat(ITHours) ?? 0,
        Average_Cost: parseFloat(Average_Cost) ?? 0,


        Fulfillment_contract: {
            objectId: contractId
        },
        Service: {

            objectId: serviceId
        }
    }

    fetch(
        "https://cleanstation.backendless.app/api/services/Estimate/Crate_Estimate",
        {
            method: "POST",
            body: JSON.stringify(estimateData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("Paras API done total", data);
            EstimateId = data.objectId;
            handleEstimateID(EstimateId);
            Swal.fire("Success", "Estimate Created Successfully", "success");
            $("#FulfillmentContractDetailSection").hide();
            $("#fulfillmentContractSection").hide();
            $("#CreateFulfillmentContractSection").hide();
            $("#MainSection").show();
        })
        .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", error, "error");
        });
})
// End here
function handleEstimateID(objId){
console.log(objId);
}

$("#cancelESTunitbutton").click(function () {
    $("#EstimateDetailSectionBlock").hide();
    $("#EstimatemainSection").show();
    $("#createEstimateSection").show();
})



function calcEstimateDays() {
    var startDate = new Date(document.getElementById("estimateStartDate").value);
    var endDate = new Date(document.getElementById("estimateEndDate").value);
    // One day in milliseconds
    var oneDay = 24 * 60 * 60 * 1000;
    // Calculate the difference in days
    var diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    // Display the result
    document.getElementById("totalEstimate-Days").textContent =
        diffDays + " days";
}



function setEndDateEstimatelog() {
    const startDateInput = document.getElementById("estimateStartDate");
    const endDateInput = document.getElementById("estimateEndDate");
    const errorElement = document.getElementById("estimateErrormsg");

    const startDate = new Date(startDateInput.value);
    const today = new Date();

    // Check if startDate is before today
    if (estimateEndDate < startDate) {
        errorElement.innerHTML = "Start date cannot be before today.";
        errorElement.style.color = "red";
        errorElement.style.display = "block";
        startDateInput.value = "";
        endDateInput.value = "";
        endDateInput.disabled = true;
    } else {
        errorElement.style.display = "none";
        endDateInput.disabled = false;
    }

    // Set the minimum selectable date in the end date picker
    const minEndDate = new Date(startDate);
    minEndDate.setDate(minEndDate.getDate() + 1); // Increment by 1 day to disable the selected start date
    endDateInput.min = minEndDate.toISOString().slice(0, 10);
}