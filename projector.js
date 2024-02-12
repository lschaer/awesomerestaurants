import { LABEL, VALID, VALUE}                             from "./presentationModel.js";
import { getStarRating}                                   from "./nicethings.js";
export{ ListProjector, RegionProjector, FormProjector }


const getRandomChoice = (region) => {
    let choice = null;
    const regionElm = document.getElementById(`Region-${region}`);
    const max = regionElm.childElementCount - 1;

    const randomNumber = Math.floor(Math.random() * (max - 1 + 1) + 1);
    console.log(randomNumber);
    choice = regionElm.childNodes[randomNumber];
    console.log(choice.id);
    choice = document.getElementById(choice.id);
    choice.scrollIntoView( {
        behavior: "smooth",
        block:    "center"
    });
    choice.firstChild.classList.add("highlight");
    setTimeout(() => {
        window.addEventListener("scroll", (event) => {
            if(window.pageYOffset > 500) {
                console.log(window.pageYOffset);
                choice.firstChild.classList.remove("highlight");
            }
        })
    }, "2000");
};

// Region Projector
const RegionProjector = (regionController, rootElement, region) => {

        const regionContainer = document.createElement("DIV");
        region.name.getObs(VALUE).onChange(value => regionContainer.setAttribute("id", `Region-${value}`));
        rootElement.appendChild(regionContainer);

        const regionTitleContainer = document.createElement("DIV");
        region.name.getObs(VALUE).onChange( value => regionTitleContainer.setAttribute("id", `Region-toggle-${value}`));
        regionTitleContainer.setAttribute("class", "region toggle");

        regionContainer.appendChild(regionTitleContainer);

        const collapsibleArrowLabel = document.createElement("span");
        region.name.getObs(VALUE).onChange(value => {collapsibleArrowLabel.setAttribute("id", `${value}-arrow`);});
        collapsibleArrowLabel.setAttribute("class", `collapsible-arrow`);
        collapsibleArrowLabel.innerHTML = '&#x25B4;';

        const regionTitleLabel = document.createElement("span");
        regionTitleLabel.setAttribute("class", "regionLabel");
        region.name.getObs(VALUE).onChange(value => regionTitleLabel.textContent = value);

        const regionEntryCountLabel = document.createElement("span");
        region.name.getObs(VALUE).onChange( value => {regionEntryCountLabel.setAttribute("id", `${value}-counter`)});
        regionEntryCountLabel.setAttribute("class", "counter");

        regionTitleContainer.append(collapsibleArrowLabel, regionTitleLabel, regionEntryCountLabel);
        regionContainer.appendChild(regionTitleContainer);

};

// List Projector to Display Restaurant Entries within their specific Region
// Restaurant is linked to Region by using natural ID of the Region itself
const ListProjector = (listController, rootElement, restaurant, formController) => {

        const rowElement = document.createElement("DIV");
        restaurant.name.getObs(VALUE).onChange(value => {
            const nameWithoutSpaces = value.replace(/[&\s]/g,'');
            rowElement.setAttribute("id", `detailView-${nameWithoutSpaces}`);
        });

        const entryContainer = document.createElement("DIV");
        restaurant.name.getObs(VALUE).onChange(value => entryContainer.setAttribute("id", `entry`));
        entryContainer.setAttribute("class", "collapsible");

        const titleRowContainer = document.createElement("DIV");
        titleRowContainer.setAttribute("class", "entry-title-row");
        const nameLabel = document.createElement("span");
        nameLabel.setAttribute("class","entry-title-row");
        restaurant.name.getObs(VALUE).onChange(value => nameLabel.setAttribute("id", `entry-title`));
        restaurant.name.getObs(VALUE).onChange(value => nameLabel.textContent = value);
        const hLineDivider = document.createElement("HR");
        hLineDivider.setAttribute("id", `title-divider`);

        const description = document.createElement("DIV");
        restaurant.name.getObs(VALUE).onChange( value => description.setAttribute("id", `entry-description`));
        restaurant.description.getObs(VALUE).onChange( value => description.textContent = value);

        const footerRowContainer = document.createElement("DIV");
        footerRowContainer.setAttribute("class", "entry-footer-row");
        const rating = document.createElement("DIV");
        restaurant.name.getObs(VALUE).onChange( value => rating.setAttribute("id",  `entry-rating`));
        restaurant.rating.getObs(VALUE).onChange( value => rating.innerHTML = getStarRating(value));

        const category = document.createElement("DIV");
        restaurant.category.getObs(VALUE).onChange( value => category.setAttribute("id", `entry-category`));
        restaurant.category.getObs(VALUE).onChange( value => category.textContent = `Kategorie: ${value}`);

        const mapsLink = document.createElement("a");
        mapsLink.setAttribute("class","directions-pin");
        mapsLink.innerHTML = "&#128205;";
        mapsLink.target = "_blank";
        restaurant.name.getObs(VALUE).onChange(value => mapsLink.setAttribute("id", `entry-directions`));
        restaurant.maps_link.getObs(VALUE).onChange(value => mapsLink.href = value);

        const entryEditRow = document.createElement("DIV");
        entryEditRow.setAttribute("class", "entryEditRow");

        const lastUpdate = document.createElement("span");
        lastUpdate.setAttribute("class","lastUpdate");
        restaurant.name.getObs(VALUE).onChange(value => lastUpdate.setAttribute("id", `entry-lastupdate`));
        restaurant.last_update.getObs(VALUE).onChange(value => lastUpdate.textContent = `Zuletzt gespiesen: ${value}`);

        /*const editButton = document.createElement("Button");
        editButton.setAttribute("class","editButton");
        editButton.innerHTML = '&#9998;';

        // Edit Button onClick
        restaurant.name.getObs(VALUE).onChange( value => editButton.onclick = () => {
            const formContainer = document.getElementById("formEntryContainer");
            formController.addForm();
            FormEditEntryProjector(formContainer,restaurant);
        });
         */


        titleRowContainer. append(nameLabel,rating);
        footerRowContainer.append(category,mapsLink);
        entryEditRow.append(lastUpdate);
        entryContainer.    append(titleRowContainer, hLineDivider,description,footerRowContainer,entryEditRow);
        rowElement.        appendChild(entryContainer);

        restaurant.regionID.getObs(VALUE).onChange( value => {
            const containerElement = rootElement.querySelector(`#Region-${value}`);
            containerElement.appendChild(rowElement);
        });

        restaurant.regionID.getObs(VALUE).onChange( regionid => {
            const entryCounter = rootElement.querySelector(`#${regionid}-counter`);
            entryCounter.innerHTML = `${Number(entryCounter.textContent)+1}`;

            const listTitleLabel = rootElement.querySelector(`#Region-toggle-${regionid}`);

            // Hide or show collapsible if Region Element closed or expanded
            restaurant.name.getObs(VALUE).onChange( value => {
                const nameWithoutSpaces = value.replace(/[&\s]/g,'');
                const list = rootElement.querySelector(`#detailView-${nameWithoutSpaces}`);
                const randomChoiceButton = document.getElementById("getRandomChoiceButton");
                restaurant.regionID.getObs(VALUE).onChange( region => {
                    const regionElement = rootElement.querySelector(`#Region-toggle-${region}`);
                    if(regionElement.hasAttribute("open")){
                        list.setAttribute("open", "");
                    } else {
                        list.setAttribute("closed", "");
                        list.setAttribute("closing", "");

                    }
                });
                listTitleLabel.addEventListener("click", () => {
                    if (list.hasAttribute("open")) {
                        list.removeAttribute("closed");
                        list.setAttribute("closing", "");
                        list.removeAttribute("open");
                        listTitleLabel.removeAttribute("open");
                        randomChoiceButton.style.setProperty("display","none");
                        rootElement.querySelector(`#${regionid}-arrow`).innerHTML = '&#x25B4;';
                    } else {
                        list.removeAttribute("closing");
                        list.removeAttribute("closed");
                        list.setAttribute("open", "");
                        listTitleLabel.setAttribute("open", "");
                        if (Number(entryCounter.textContent)>1){
                            randomChoiceButton.style.setProperty("display","block");
                            randomChoiceButton.onclick = _ => {
                               console.log(`Random-Choice from: ${regionid}`);
                               getRandomChoice(regionid);
                            };
                        }
                        rootElement.querySelector(`#${regionid}-arrow`).innerHTML = '&#x25BC;';
                    }
                })
            });
        });
};


const CreateForm = _ => {

    const newEntryModal     = document.createElement("MODAL");
    const newEntryModalForm = document.createElement("DIV")
    newEntryModal.setAttribute("id", "newEntryModal");
    newEntryModalForm.setAttribute("id","newEntryModalForm");
    const formStructure = document.createElement("FORM");
    const formTitle = document.createElement("H2");
    formTitle.setAttribute("id", "formTitle");
    formTitle.textContent = "new awesome restaurant.";

    const nameLabel = document.createElement("LABEL");
    nameLabel.setAttribute("id", "nameLabel");
    nameLabel.setAttribute("class", "form-label");
    const nameInput = document.createElement("INPUT");
    nameInput.setAttribute("id","nameInput");
    nameInput.setAttribute("type", "text");
    nameInput.placeholder = "Name des Restaurants...";
    nameLabel.setAttribute("for", "nameInput");
    nameInput.setAttribute("class", "form-input");
    nameLabel.textContent = "Name: ";

    const regionLabel = document.createElement("LABEL");
    regionLabel.setAttribute("id", "regionLabel");
    regionLabel.setAttribute("class", "form-label");
    const regionInput = document.createElement("INPUT");
    regionInput.setAttribute("id","regionInput");
    regionInput.setAttribute("type", "text");
    regionInput.placeholder = "Region";
    regionLabel.setAttribute("for", "regionInput");
    regionInput.setAttribute("class", "form-input");
    regionLabel.textContent = "Region: ";

    const mapsLabel = document.createElement("LABEL");
    mapsLabel.setAttribute("id", "mapsLabel");
    mapsLabel.setAttribute("class", "form-label");
    const mapsInput = document.createElement("INPUT");
    mapsInput.setAttribute("id","mapsInput");
    mapsInput.setAttribute("type", "text");
    mapsInput.placeholder = "https://maps.app.goo.gl/...";
    mapsLabel.setAttribute("for", "mapsInput");
    mapsInput.setAttribute("class", "form-input");
    mapsLabel.textContent = "Link mit directions: ";


    const descriptionLabel = document.createElement("LABEL");
    descriptionLabel.setAttribute("id", "descriptionLabel");
    descriptionLabel.setAttribute("class", "form-label");
    const descriptionInput = document.createElement("TEXTAREA");
    descriptionInput.setAttribute("id","descriptionInput");
    descriptionInput.setAttribute("type", "textarea");
    descriptionInput.placeholder = "Eine kurze Beschreibung...";
    descriptionInput.setAttribute("rows", "4");
    descriptionLabel.setAttribute("for", "descriptionInput");
    descriptionInput.setAttribute("class", "form-input");
    descriptionLabel.textContent = "Beschreibung: ";

    const categoryLabel = document.createElement("LABEL");
    categoryLabel.setAttribute("id", "categoryLabel");
    categoryLabel.setAttribute("class", "form-label");
    const categorySelect = document.createElement("SELECT");
    categorySelect.setAttribute("id","categorySelect");
    categorySelect.setAttribute("type", "select");
    categoryLabel.setAttribute("for", "categorySelect");
    categoryLabel.setAttribute("class", "form-label");
    categoryLabel.textContent = "Kategorie: ";
    categorySelect.setAttribute("class", "form-select");
    const category1 = document.createElement("option");
    category1.value = "leger";
    category1.textContent = "leger";
    const category2 = document.createElement("option");
    category2.value = "gehoben";
    category2.textContent = "gehoben";
    const category3 = document.createElement("option");
    category3.value = "trés chic";
    category3.textContent = "trés chic";
    categorySelect.appendChild(category1);
    categorySelect.appendChild(category2);
    categorySelect.appendChild(category3);

    const ratingLabel = document.createElement("LABEL");
    ratingLabel.setAttribute("id", "ratingLabel");
    ratingLabel.setAttribute("class", "form-label");
    const ratingSelect = document.createElement("SELECT");
    ratingSelect.setAttribute("id","ratingSelect");
    ratingSelect.setAttribute("type", "select");
    ratingLabel.setAttribute("for", "ratingSelect");
    ratingLabel.setAttribute("class", "form-label");
    ratingLabel.textContent = "Rating: ";
    ratingSelect.setAttribute("class", "form-select");
    const descriptioncategory = document.createElement("option");
    descriptioncategory.value = "";
    descriptioncategory.textContent = "Wählen zwischen 1 (ok)...5 (best of the best)";
    const ratingcategory1 = document.createElement("option");
    ratingcategory1.value = "1";
    ratingcategory1.textContent = "1";
    const ratingcategory2 = document.createElement("option");
    ratingcategory2.value = "2";
    ratingcategory2.textContent = "2";
    const ratingcategory3 = document.createElement("option");
    ratingcategory3.value = "3";
    ratingcategory3.textContent = "3";
    const ratingcategory4 = document.createElement("option");
    ratingcategory4.value = "4";
    ratingcategory4.textContent = "4";
    const ratingcategory5 = document.createElement("option");
    ratingcategory5.value = "5";
    ratingcategory5.textContent = "5";
    ratingSelect.append(descriptioncategory,ratingcategory1,
        ratingcategory2,ratingcategory3,ratingcategory4,ratingcategory5);

    const buttonContainer = document.createElement("DIV");
    buttonContainer.setAttribute("class", "formButtonContainer");
    const cancelButton = document.createElement("BUTTON");
    cancelButton.setAttribute("class", "formButton");
    cancelButton.setAttribute("id", "cancelButton");
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "cancel";
    const submitButton = document.createElement("BUTTON");
    submitButton.setAttribute("class", "formButton");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "button");
    submitButton.textContent = "save";

    /*newEntryModal.style.display = "none";*/
    buttonContainer.append(submitButton, cancelButton);

    // Append form Structure to show Modal
    formStructure.append(formTitle, nameLabel, nameInput, regionLabel, regionInput, descriptionLabel, descriptionInput,
        categoryLabel, categorySelect, ratingLabel, ratingSelect, mapsLabel, mapsInput,  buttonContainer);

    newEntryModalForm.appendChild(formStructure);
    newEntryModal.appendChild(newEntryModalForm);

    return newEntryModal;
}

// Form Projector to create new awesome restaurant entries
const FormProjector = (formController, listController, model, rootElement) => {

    const entryModal = CreateForm();

    const submitButton = entryModal.querySelector("#submitButton");
    const cancelButton = entryModal.querySelector("#cancelButton");
    const buttonContainer = entryModal.querySelector(".formButtonContainer");

    const date = new Date().toUTCString().slice(5, 16);

    // Safe new entries within Form to add them to List
    submitButton.onclick = _ => {
        const newRestaurant = JSON.parse(JSON.stringify(
            { name: nameInput.value,
                regionID: regionInput.value,
                description: descriptionInput.value,
                rating: ratingSelect.value,
                category: categorySelect.value,
                maps_link: mapsInput.value,
                last_update: date
            }));
        listController.addRestaurant(newRestaurant);
        formController.removeModel(model);
    };


    // Cancel Button on to cancel form and return to main screen
    cancelButton.onclick = _ => formController.removeModel(model);

    formController.onModelRemove( (removedModel, removeMe) => {
        if (removedModel !== model) return;
        rootElement.removeChild(newEntryModal);
        removeMe();
    });

    buttonContainer.append(submitButton, cancelButton);

    // Append form Structure to show Modal
    rootElement.appendChild(entryModal);
};

const FormEditEntryProjector = (rootElement, model) => {

    const editFormTitle = rootElement.querySelector("#formTitle");
    const nameInput = rootElement.querySelector("#nameInput");
    const regionInput = rootElement.querySelector("#regionInput");
    const descriptionInput = rootElement.querySelector("#descriptionInput");
    const categorySelect = rootElement.querySelector("#categorySelect");
    const ratingSelect = rootElement.querySelector("#ratingSelect");
    const mapsInput = rootElement.querySelector("#mapsInput");

    model.name.getObs(VALUE).onChange( value => {
        editFormTitle.textContent = `Edit: ${value}`;
        nameInput.value = value;
    });

    model.regionID.getObs(VALUE).onChange(value => regionInput.value = value);
    model.description.getObs(VALUE).onChange(value => descriptionInput.value = value);
    model.category.getObs(VALUE).onChange(value => categorySelect.value = value);
    model.rating.getObs(VALUE).onChange(value => ratingSelect.value = value);
    model.maps_link.getObs(VALUE).onChange(value => mapsInput.value = value);

    const updateButton = rootElement.querySelector("#submitButton");
    updateButton.innerHTML = "Update";
    updateButton.onclick = _ => console.log("Update");

};
