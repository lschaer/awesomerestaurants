// Imports
import { Attribute, LABEL, VALUE }                                                            from "./presentationModel.js";
import { RegionProjector, ListProjector, FormProjector }              from "./projector.js";
// Exports
export {RegionView, ListView, FormView, Restaurant, Region, Form, ALL_RESTAURANT_ATTRIBUTE_NAMES, ALL_REGION_ATTRIBUTE_NAMES}

// Attributes not used yet, but should be used in next refactoring
const ALL_RESTAURANT_ATTRIBUTE_NAMES = ['name', 'description', 'rating', 'category', 'last_update', 'maps_link'];
// Attributes not used yet, but should be used in next refactoring
const ALL_REGION_ATTRIBUTE_NAMES     = ['name', 'counter'];

// Restaurant element with specific Attributes
const Restaurant = () => {
    const nameAttribute         = Attribute("Name");
    const descriptionAttribute  = Attribute("Description");
    const ratingAttribute       = Attribute("rating");
    const categoryAttribute     = Attribute("category");
    const lastUpdateAttribute   = Attribute("last_update");
    const regionIDAttribute     = Attribute("Region");
    const mapsAttribute         = Attribute("Maps");

    return {
        name:           nameAttribute,
        description:    descriptionAttribute,
        rating:         ratingAttribute,
        category:       categoryAttribute,
        last_update:    lastUpdateAttribute,
        maps_link:      mapsAttribute,
        regionID:       regionIDAttribute,
    }
};


// Region element with specific Attributes
const Region = () => {

    const nameAttribute = Attribute( "Name" );
    nameAttribute.getObs(LABEL).setValue("Name");

    return {
        name:       nameAttribute,
        setName:    nameAttribute.getObs(VALUE).setValue,
    }
};

// Form
const Form = () => {

    const nameInput          = Attribute("Region Name");

    return {
        name: nameInput,
    }
};


// RegionView and render function
const RegionView = (regionController, rootElement) => {

    let render = region => RegionProjector(regionController, rootElement, region);

    // binding
    regionController.onRegionAdd(render);
};

// RegionView and render function
const ListView = (listController, formController, rootElement) => {

    let render = restaurant => ListProjector(listController, rootElement, restaurant, formController);

    // binding
    listController.onRestaurantAdd(render);
};


// FormView and render function
 const FormView = (formController, listController, rootElement) => {

     // newEntry Button onClick to Show Modal
     //const addEntryButton = document.getElementById("addEntryButton");
     //addEntryButton.onclick = () => formController.addForm();

     let render = form => FormProjector(formController, listController,form ,rootElement);

     formController.onModelAdd(render);
 };