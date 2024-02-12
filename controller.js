import { ObservableList, Observable }                                           from "./observable/observable.js";
import { Restaurant, Region }                                                   from "./restaurant.js";
import { Attribute, VALUE }                                                     from "./presentationModel.js";

export { ListController, RegionController, FormController }

// ListController for restaurant entries
const ListController = RestaurantConstructor => {

    const listEntryModel = ObservableList([]);

    const addRestaurant = restaurantData => {
        const newRestaurant = Restaurant();
        newRestaurant.name.getObs(VALUE).setValue(restaurantData.name);
        newRestaurant.description.getObs(VALUE).setValue(restaurantData.description);
        newRestaurant.rating.getObs(VALUE).setValue(restaurantData.rating);
        newRestaurant.category.getObs(VALUE).setValue(restaurantData.category);
        newRestaurant.last_update.getObs(VALUE).setValue(restaurantData.last_update);
        newRestaurant.maps_link.getObs(VALUE).setValue(restaurantData.maps_link);
        newRestaurant.regionID.getObs(VALUE).setValue(restaurantData.regionID);
        listEntryModel.add(newRestaurant);
    };

    return {
        addRestaurant,
        setSelectedEntry:    listEntryModel.setValue,
        onEntrySelected:     listEntryModel.onChange,
        onRestaurantAdd:     listEntryModel.onAdd,
        onChange:            () => listEntryModel.onChange,
        removeModel:         listEntryModel.del,
    }
};

// Region Controller for Region List
const RegionController = RegionConstructor => {

    const regionModel = ObservableList([]); // observable array of models

    const addRegion = regionData => {
      const newRegion = Region();
      newRegion.name.getObs(VALUE).setValue(regionData.name);
      regionModel.add(newRegion);
    };

    const collapsed     = Attribute(true);
    const counter       = Attribute(0);

    return {
        addRegion,
        onChange:            () => regionModel.onChange,
        onRegionAdd:         regionModel.onAdd,
        getCount:            counter.getObs(VALUE).getValue,
        setCount:            counter.getObs(VALUE).setValue,
        onCounterChanged:    counter.getObs(VALUE).onChange,
        getCollapsed:        collapsed.getObs(VALUE).getValue,
        toggleCollapsed:     collapsed.getObs(VALUE).setValue,
        removeModel:         regionModel.del,
        onModelRemove:       regionModel.onDel,
    }
};

// FormController to add new entries
const FormController = FormConstructor => {

    const formModel = ObservableList([]); // observable array of models

    return {
        addForm:             () => formModel.add(FormConstructor()),
        onChange:            () => formModel.onChange,
        removeModel:         formModel.del,
        onModelAdd:          formModel.onAdd,
        onModelRemove:       formModel.onDel,
    }
};



