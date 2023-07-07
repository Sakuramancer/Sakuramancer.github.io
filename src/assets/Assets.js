// characters
import placeholderImage from "./characters/Placeholder h300.png";
import andrakasImage from "./characters/Andrakas h300.png";
import talisinImage from "./characters/Talisin h300.png";
import selenaImage from "./characters/Selena h300.png";
import undaaratelImage from "./characters/Unda'aratel h300.png";
// magic icons
import weaponIcon from "./itemIcons/axe-sword.svg";
import armorIcon from "./itemIcons/lamellar.svg";
import ringIcon from "./itemIcons/diamond-ring.svg";
import potionIcon from "./itemIcons/round-bottom-flask.svg";
import trinketIcon from "./itemIcons/swap-bag.svg";
import backpackIcon from "./itemIcons/bindle.svg";
// magic items
import daeruthImage from "./magicItems/daeruth.png";

export const characterAssets = {
  andrakas: {
    path: andrakasImage,
    alt: "D&D Halfling Fighter/Rogue/Bearstander by Brendon Chang @bchangart",
  },
  talisin: {
    path: talisinImage,
    alt: "Elf by BoissB",
  },
  efelamon: {
    path: placeholderImage,
    alt: "The Last Spark by Eleonor Piteira @eleonorpiteira",
  },
  selena: {
    path: selenaImage,
    alt: "Enchantress by Lauren Walsh @laurenwalshart",
  },
  undaaratel: {
    path: undaaratelImage,
    alt: "Witch by @euna.draw",
  },
};

export const magicItemsAssets = {
  daeruth: {
    path: daeruthImage,
    alt: "Ludwig's holy blade, Bloodborne",
  },
};

export const itemIconAssets = {
  weapon: {
    path: weaponIcon,
    alt: "axe-sword icon from game-icons.net"
  },
  armor: {
    path: armorIcon,
    alt: "lamellar icon from game-icons.net"
  },
  ring: {
    path: ringIcon,
    alt: "diamond-ring icon from game-icons.net"
  },
  potion: {
    path: potionIcon,
    alt: "round-bottom-flask icon from game-icons.net"
  },
  trinket: {
    path: trinketIcon,
    alt: "swap-bag icon from game-icons.net"
  },
  backpack: {
    path: backpackIcon,
    alt: "bindle icon from game-icons.net"
  },
}