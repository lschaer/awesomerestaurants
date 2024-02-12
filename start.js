// imports
import { ListController, RegionController, FormController}              from "./controller.js";
import { RegionView, ListView, FormView, Region,Form, Restaurant }      from "./restaurant.js";
import { TitleLetters }                                                 from "./nicethings.js";
import { restaurantData, regionData }                                   from "./restaurantData.js";


// Title definition, including speed and delay for animation
const TITLE = "h1_main";
const LETTERS_SPEED = 60;
const DELAY = 500;
const TITLE_TEXT = 'awesome restaurants.';
// call title letter animation
TitleLetters(TITLE_TEXT,TITLE,LETTERS_SPEED,DELAY);

// Get Restaurant and Region-Data
const regions       = regionData.Regions
const restaurants   = restaurantData.Restaurants;

// Get container from html document to add content
const mainContainer = document.getElementById("listEntryContainer");
const formContainer = document.getElementById("formEntryContainer");

// Create Controller
const regionController  = RegionController(Region);
const listController = ListController(Restaurant);
const formController    = FormController(Form);
// Create Views
RegionView(regionController, mainContainer);
ListView(listController, formController, mainContainer);
FormView(formController, listController, formContainer);

// iterate through Region-Data to add them to the Region Controller
regions.forEach( region => regionController.addRegion(region));
// iterate through Restaurant-Data to add them to the listController
restaurants.forEach( restaurant => listController.addRestaurant(restaurant));




