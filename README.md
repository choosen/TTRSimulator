TicketToRide Simulator edited by choosen

[Most recent version online](https://choosen.github.io/ttr2/TTRsimulations)

`TODO.list` has my future ideas.

You can enter your full setup 
by leaving color inputs (example: shift+tab) and paste numbers values in new lines.

You can pass query params also to init colors with them, ex: TTRsimulations.html?0=10&1=12
Click `Refresh routes` button clear selected routes and store current colors set into query params.

`Copy link` will store in clipboard link with added query params to share selected route to others.
You can combine it with refresh route parameter to share also colors setup.

Click `Save set` button to store default initial setup
 and open new window (without query params) with the same color set.

By default there is 44 seed with 6 locos and 6/4 per colors

You can select your own color on mutli color routes, to make the show optimised locomotive usage 
(with not selected multi paths it shows the earliest solved solution only, not optimal)

## Caveats

- remaining cards column counts based on either solid colors routes
  or all together if all gray and multicolor routes are manually selected.

Initial version
|![screenshot](https://github.com/user-attachments/assets/fdb40635-2ffd-4e86-8e83-3cdd9951f226)
Milestone: picking up multiselect colors
|![screenshot](https://github.com/user-attachments/assets/ca0008f4-e0ee-4fbc-a4ab-b06581716697)
Milestone: picking up multiselect/gray color tracks
|![screenshot](https://github.com/user-attachments/assets/19aaa132-eb60-4db6-8677-24319e9d6ce1)