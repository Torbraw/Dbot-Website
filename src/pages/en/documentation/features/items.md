---
title: Items
layout: ../../../../layouts/documentation-layout.astro
---

Items are the core of the game. They are used to boost your stats and give you a better chance of winning battles. They are four rarities of items: common <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Common.png'>, rare <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Rare.png'>, epic <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Epic.png'> and legendary <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Legendary.png'>. The higher the rarity, the better the item is but also the harder it is to get.  
You can see the items you have with the `/inventory` command and you can equip them with the `/equip-unequip` command.

## Type of items

They are 9 types of items:

- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Weapon.png'> **Weapon** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Attack.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Shield.png'> **Shield** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Helmet.png'> **Helmet**- Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Amulet.png'> **Amulet** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Mana.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Bracers.png'> **Bracers** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Ring.png'> **Ring** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Mana.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Chestplate.png'> **Chestplate** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'> and <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Attack.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Pants.png'> **Pants** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'>
- <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Boots.png'> **Boots** - Gives <img src='https://d2lqwktucnc67y.cloudfront.net/icons/Health.png'>

## Obtaining items

- Play the `/slot` machine and hope to get lucky.
- Buy items from the `/dbot-marketplace`.
- Buy items from other players on the marketplace with the `/marketplace-action` command.
- Trade items with other players with the `/trade-item` command.

## Selling items

You can sell items for a fixed price with the `/sell-item` or `/sell-items` command. Those commands will never sells items in your inventory. You can also sell items to other players on the marketplace with a price of your choice with the `/marketplace-action` command.

## Difference between marketplace and dbot-marketplace

The `/dbot-marketplace` is a marketplace where you can buy items (and spells) from the bot directly. The `/marketplace` is a place where you can buy and sells items with other players. The marketplace is not restricted to each server, it is a global marketplace.

## Related commands

- You can lock/unlock items with the `/lock-item` command. Lock items will not be sold when selling items with the `/sell-items` command. Locked items can still be sold with the `/sell-item` command or on the marketplace so be careful. Locked items will show a lock icon (🔒) in the inventory.
- You can gift an item to another player with the `/gift-item` command.
- To have info about a certain item, you can use the `/get-info` command or visit the [encyclopedia](/en/encyclopedia/items).
