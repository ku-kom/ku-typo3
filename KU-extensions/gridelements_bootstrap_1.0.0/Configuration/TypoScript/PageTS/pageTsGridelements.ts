# pxc MA
tx_gridelements {
    setup {

        boot1col {
            title = Gridelements Bootstrap: 1 spaltig (Modulcontainer, erweiterbar)
            description = Eine Spalte
            config {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Inhalt
                                colPos = 1
                            }
                        }
                    }
                }
            }

            flexformDS = FILE:EXT:gridelements_bootstrap/Configuration/FlexForm/boot1col.xml
        }

        boot2cols {
            title = Gridelements Bootstrap: 2 spaltig
            description = Zwei Spalten
            config {
                colCount = 2
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Spalte A
                                colPos = 1
                            }

                            2 {
                                name = Spalte B
                                colPos = 2
                            }
                        }
                    }
                }
            }

            flexformDS = FILE:EXT:gridelements_bootstrap/Configuration/FlexForm/boot2cols.xml
        }

        boot3cols {
            title = Gridelements Bootstrap: 3 spaltig
            description = Drei Spalten
            config {
                colCount = 3
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Spalte A
                                colPos = 1
                            }

                            2 {
                                name = Spalte B
                                colPos = 2
                            }

                            3 {
                                name = Spalte C
                                colPos = 3
                            }
                        }
                    }
                }
            }

            flexformDS = FILE:EXT:gridelements_bootstrap/Configuration/FlexForm/boot3cols.xml
        }

        boot4cols {
            title = Gridelements Bootstrap: 4 spaltig
            description = Vier Spalten
            config {
                colCount = 4
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Spalte A
                                colPos = 1
                            }

                            2 {
                                name = Spalte B
                                colPos = 2
                            }

                            3 {
                                name = Spalte C
                                colPos = 3
                            }

                            4 {
                                name = Spalte D
                                colPos = 4
                            }
                        }
                    }
                }
            }

            flexformDS = FILE:EXT:gridelements_bootstrap/Configuration/FlexForm/boot4cols.xml
        }

    }
}



