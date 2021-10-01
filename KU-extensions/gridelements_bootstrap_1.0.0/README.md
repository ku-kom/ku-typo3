# gridelements_bootstrap

Modular system for TYPO3 gridelements: Extend gridelements with your own Modules (every module is one partial). Just extend the TypoScript modules Section and add a partial with the same name, thats it. Examples are included. In every partial you have enhanced data with real objects to build all you want just with fluid.

* **TER**: https://extensions.typo3.org/extension/gridelements_bootstrap/
* **CMS**: TYPO3 8
* **Bootstrap**: 3
* **Type**: plugin

# Changelog

* 21.11.2018 - Removed namespaces from templates

# Installation

* Install "gridelements_bootstrap" plugin from GIT or TER
* Add "Gridelements Bootstrap" static TypoScript (setup.txt) to your website template
* Add "Gridelements Bootstrap" PageTS (Root Page -> Edit -> Ressources)
* Test it: Now go to some page, +Content and chose "Gridelements Bootstrap: Modulcontainer (erweiterbar)" or "Gridelements Bootstrap: 2 spaltig"

# Example for TypoScript

```
tx_gridelementsbootstrap {

    settings {

        // ---------------------------------------------------------------------------
        // Define your own gridelements modules here
        // ---------------------------------------------------------------------------

        modules{
            // Do not remove default module, because it is the default
            default {
                title = Default
                description = Default Container with 1 col
                // This CSS classes will only be available when chosing this module
                css {
                    // css-class = Title
                    container = Container Boxed
                    container-fluid = Full Width Container
                }
            }
            // First module "Akkordeon.html"
            akkordeon {
                title = Akkordeon
                description = Just add some contentelements of type "text and media" and see what happens
                // This CSS classes will only be available when chosing this module
                css {
                    // css-class = Title
                    akkordeon1 = Akkordeon Type 1
                    akkordeon1 = Akkordeon Type 2
                    container = Container Boxed
                    container-fluid = Full Width Container
                }
            }
            // Second module "Debug.html"
            debug {
                title = Debug Output (see variables you can use)
                description = Add some elements and see the debug output, so you know how you can extend this and how much you can do with this :)
                // This CSS classes will only be available when chosing this module
                css {
                    // css-class = Title
                    container = Container Boxed
                    container-fluid = Full Width Container
                }
            }

            // Bootstrap Elements

            alert {
                title = Bootstrap Alert
                description = Add a default alert
                // This CSS classes will only be available when chosing this module
                css {
                    // css-class = Title
                    alert-success = Success
                    alert-info = Info
                    alert-warning = Warning
                    alert-danger = Danger
                }
            }

            well {
                title = Bootstrap Well
                description = Add a default well
                // This CSS classes will only be available when chosing this module
                css {

                }
            }
        }

        // ---------------------------------------------------------------------------
        // BOOTSTRAP SECTION
        // ---------------------------------------------------------------------------

        // Extra CSS Classes for visibility
        visibility {
            0 = text-left
            1 = text-center
            2 = text-right
            3 = text-justify
            4 = text-nowrap
        }

        // Extra CSS Classes for Container (container, container-fluid...)
        container {
            0 = equalize-rows
            1 = something-other
        }

    }

}
```