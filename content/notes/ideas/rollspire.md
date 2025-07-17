---
title: rollspire
description: a dice-driven dungeon crawler, where fate decides victory
tags:
  - idea
  - game
---

<div style="text-align: center">
<img width="300" src="notes/assets/rollspire-icon.png" />
</div>

## Introduction

### Game Summary

**RollSpire** is a dice-rolling tile-based dungeon crawling game, featuring multiple playable character classes, each with their own unique set of abilities. Avoid traps, fight enemies, plan your path towards acquiring an ancient relic of unimaginable power that could either save or doom the world.

## Inspiration

<div style="text-align: center">
<img src="https://www.pnparcade.com/cdn/shop/files/DangerousSpace_111923-08_360x.jpg?v=1735868300" />
</div>

### Dungeon Pages

**Dungeon Pages** is the main inspiration towards the dice-rolling playstyle of the game. Your actions are dependent on the rolls you make, including movement, picking up items & battle. Same goes for your enemies and different environmental challenges such as traps & buffs/de-buffs.

---

<div style="text-align: center">
<a href="https://img.itch.zone/aW1hZ2UvNzg0OTg5LzEwMTc5MzMyLmdpZg==/original/cqqoVv.gif" target="_blank"><img width="400" src="https://img.itch.zone/aW1hZ2UvNzg0OTg5LzEwMTc5MzMyLmdpZg==/347x500/VUkv%2FG.gif" />
</a>
</div>

### Slice & Dice

**Slice & Dice** shows how rolling die digitally can still be fun in a heavy minimalist pixel art style - creating 3D in a 2D context masterfully.
### Player Experience

In a single screen dungeon for each of the 30+ levels, the player will have to make their way towards the next level using careful **planning & dice management** to avoid/disable traps, defeat enemies & solve puzzles.
### Platform

The game is developed to be released on all major computer platforms (win, linux, macos), as well as ios & android.
### Development
- c /w raylib
- fl studio
- pixel editor & tiled
### Genre

Single player, puzzle, casual, dungeon crawler, rogue-lite
### Target Audience

Casual gamers who are up for puzzling challenges as well as more veteran players looking to play something in their "downtime".
## Concept

### Gameplay Overview

The player choses a character class to go through the dungeons with. Class cannot be changed once the run is started. Each level is a dungeon that consists of one or more of the following: monsters, doors, traps, coins, items. Completing the dungeon goes in rounds with different phases:

1. **Roll Phase:**
    - A pre-determined number of dice are rolled once of the player and once for the environment/dungeon
    - Some re-rolls are possible *(provided by an item, ability, buff?)*
2. **Action Phase:**
    - Assign dice to (1) explore, (2) fight, (3) interact (pick up items, open doors, disable traps)
    - Player has to plan & strategize heavily to avoid the possible negative effects the environment poses to him (based on its die from Phase 1)
3. **Environment Response:**
    - Monsters, traps & dungeon events are triggered
4. **Progression:**
    - The player gains xp, items (incl. upgrades) or buffs/de-buffs
5. **Cleanup:**
    - If the dungeon isn’t complete, the next round begins.
    - Reset temporary effects, reroll the dice, and move to the next phase $\rightarrow$ **1. Roll Phase**

---- 

![ChronoArc - Cover](notes/assets/rollspire-example-level.png)

### Mechanics & Objectives

|                                                                   Mechanic                                                                    |                       Animated Mockup                       |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------:|
|            **Loot**<br>randomly chest that require a key & give out items appropriate to the difficulty the player has reached<br>            |             ![Rollspire - Chest](notes/assets/rollspire-chest.gif)             |
|                                                **Keys**<br>can either open doors or/and chests                                                |               ![Rollspire - Key](notes/assets/rollspire-key.png)               |
|                                            **Coin**<br>with coins the player can purchase re-rolls                                            |              ![Rollspire - Coin](notes/assets/rollspire-coin.gif)              |
| **De-buff**<br>when the player passes towards this environment object they get de-buffed with an effect appropriate to the current difficulty |           ![Rollspire - De-Buff](notes/assets/rollspire-debuff.gif)            |
|                            **Lore**<br>the banners unveil the story & provide information for some of the puzzles                             |              ![Rollspire - Lore](notes/assets/rollspire-lore.gif)              |
|                            **Traps**<br>randomly occurring obstacles that the player must either endure or disable                            |            ![Rollspire - Traps](notes/assets/rollspire-spikes.gif)             |
|                                   **Wandering Monster**<br>a monster that appears on critical failure rolls                                   | ![Rollspire - Wandering Monster](notes/assets/rollspire-wandering-monster.png) |
|                        **Monsters**<br>different monsters that are visible to the player from the start of the dungeon                        |          ![Rollspire - Monsters](notes/assets/rollspire-enemies.png)           |

#### Movement

The player must spend dice for moving orthogonally, some classes can skip cells (leap).

#### Battle

Monsters need to be defeated by "attacking" with a dice equal or higher than its defense.

#### Traps & Debuffs

Each trap has its difficulty class that must be met by the player's dice rolls.


### Characters

The play will be able to select one of the following characters (each character is a different class with its own background):
- rogue: $coming\ soon$
- mage: $coming\ soon$
- archer: $coming\ soon$
### Story

The player is a hero summoned to find an ancient relic of unimaginable power that could either save or doom the world. During the dungeon exploration the player will find little notes & hear some voice lines of an unknown voice - **The Architect**.

**The Architect** is an entity claiming to have build the spire & will do anything to protect it.

After reaching the final level - the top of the Spire of Fate - the player meets the final boos which turns out the be a doppelganger of themselves. A shadowy version of the player, reflecting the choices you’ve made throughout the game. The fight is symbolic and mechanically mirrors your abilities and playstyle.