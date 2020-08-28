import { PropertyPaneToggle } from '@microsoft/sp-property-pane';

export class WebPartProperties {
    public static ShowTitle = PropertyPaneToggle("showTitle", {
        key: "showTitle",
        label: "Show title",
        onText: 'Yes',
        offText: 'No',
        checked: true
    });

    public static allowMultipleExpanded = PropertyPaneToggle("allowMultipleExpanded", {
        key: "allowMultipleExpanded",
        label: "Allow multiple sections to be expanded?",
        onText: 'Yes',
        offText: 'No',
        checked: true
    });
    
    public static AllowZeroExpaned = PropertyPaneToggle("allowZeroExpaned", {
        key: "allowZeroExpaned",
        label: "Allow all sections to be collapsed",
        onText: 'Yes',
        offText: 'No',
        checked: true
    });
}