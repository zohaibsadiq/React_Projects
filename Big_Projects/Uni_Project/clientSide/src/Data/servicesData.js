import acInstall from "../Assets/Services_Pics/acInstall.jpg";
import bathCleaning from "../Assets/Services_Pics/bathCleaning.jpg";
import carpenterServies from "../Assets/Services_Pics/carpanterService.jpg";
import carpetCleaning from "../Assets/Services_Pics/carpetCleaing.jpg";
import cctvInstall from "../Assets/Services_Pics/cctvInstall.jpg";
import electricianService from "../Assets/Services_Pics/electricianService.jpg";
import gizerInstall from "../Assets/Services_Pics/gizerInstall.png";
import glassCleaning from "../Assets/Services_Pics/glassCleaning.jpg";
import KitchenCleaning from "../Assets/Services_Pics/kitchenCleaning.jpg";
import matressCleaning from "../Assets/Services_Pics/matressCleaning.jpg";
import ovenRepair from "../Assets/Services_Pics/ovenRepair.jpg";
import pestControls from "../Assets/Services_Pics/pestControl.jpg";
import plumberService from "../Assets/Services_Pics/plumbingService.jpg";
import sofaCleaning from "../Assets/Services_Pics/sofaCleaning.jpg";
import upsInstall from "../Assets/Services_Pics/upsInstall.jpg";
import washingMachine from "../Assets/Services_Pics/washingMachine.jpg";

export const cleaningServices = [
  {
    id: 1,
    title: "Bathroom Cleaning",
    img: { bathCleaning },
    discreption:
      "Refresh and sanitize your bathroom with our meticulous cleaning. We tackle soap scum, grout, counter...",
    bookUrl: "service/bathCleaning",
  },
  {
    id: 2,
    title: "Carpet Cleaning",
    img: { carpetCleaning },
    discreption:
      "Transform your carpets from dull to dazzling with our expert carpet cleaning. Our advanced technique...",
    bookUrl: "service/carpetCleaning",
  },
  {
    id: 3,
    title: "Glass Cleaning",
    img: { glassCleaning },
    discreption:
      "Let your surroundings shine with our expert glass cleaning. Whether it is mirrors, glass partitions,...",
    bookUrl: "service/glassCleaning",
  },
  {
    id: 4,
    title: "Matress Cleaning",
    img: { matressCleaning },
    discreption:
      "Enjoy a restful sleep on a clean and sanitized mattress. Our mattress cleaning service eliminates du...",
    bookUrl: "service/matressCleaning",
  },
  {
    id: 5,
    title: "Kitchen Cleaning",
    img: { KitchenCleaning },
    discreption:
      "Experience the joy of cooking in a spotless kitchen. Our kitchen cleaning service tackles grease, gr...",
    bookUrl: "service/kitchenCleaning",
  },
  {
    id: 6,
    title: "Sofa Cleaning",
    img: { sofaCleaning },
    discreption:
      "Restore the comfort and charm of your furniture with our professional sofa cleaning service with our...",
    bookUrl: "service/sofaCleaning",
  },
];

export const applianceRepair = [
  {
    id: 1,
    title: "Ac Install and repair",
    img: { acInstall },
    discreption:
      "Stay cool and comfortable with our expert AC repair service. Our technicians are trained to repair a...",
    bookUrl: "service/acInstall",
  },
  {
    id: 2,
    title: "Washing Machine Repair",
    img: { washingMachine },
    discreption:
      "Are appliance troubles disrupting your life? Like washing machines? Show your appliances some care ",
    bookUrl: "service/washingMachine",
  },
  {
    id: 3,
    title: "Microwave Repair",
    img: { ovenRepair },
    discreption:
      "Enjoy hot and delicious meals with our expert microwave repair service. Our technicians are trained...",
    bookUrl: "service/ovenRepair",
  },
];

export const electricalServices = [
  {
    id: 1,
    title: "Electrician Services",
    img: { electricianService },
    discreption:
      "Experience quick, safe, and affordable service booking for all your home repair needs. Whether it's...",
    bookUrl: "service/electricianService",
  },
  {
    id: 2,
    title: "UPS Installation",
    img: { upsInstall },
    discreption:
      "Keep your home and business safe with our expert UPS installation service. Our technicians are trained...",
    bookUrl: "service/upsInstall",
  },
];

export const cctvServices = [
  {
    id: 1,
    title: "CCTV Installation",
    img: { cctvInstall },
    discreption:
      "Keep your home and business safe with our expert CCTV installation service. Our technicians are...",
    bookUrl: "service/cctvInstall",
  },
];

export const plumbingServices = [
  {
    id: 1,
    title: "Plumbing Services",
    img: { plumberService },
    discreption:
      "Experience quick, safe, and affordable service booking for all your home repair needs. Whether it's...",
    bookUrl: "service/plumberService",
  },
  {
    id: 2,
    title: "Geyser Installation",
    img: { gizerInstall },
    discreption:
      "Enjoy hot water whenever you need it with our expert geyser installation service. Our technicians...",
    bookUrl: "service/gizerInstall",
  },
];

export const pestControl = [
  {
    id: 1,
    title: "Pest Control Services",
    img: { pestControls },
    discreption:
      "Experience quick, safe, and affordable service booking for all your home repair needs. Whether it's...",
    bookUrl: "service/pestControls",
  },
];

export const carpenterServices = [
  {
    id: 1,
    title: "Carpenter Services",
    img: { carpenterServies },
    discreption:
      "Experience quick, safe, and affordable service booking for all your home repair needs. Whether it's...",
    bookUrl: "service/carpenterServies",
  },
];
