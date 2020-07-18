interface PanoramaPanelNameMap {
    Panel: Panel;
    Label: LabelPanel;
    Image: ImagePanel;
    DOTAAbilityImage: AbilityImage;
    DOTAItemImage: ItemImage;
    DOTAHeroImage: HeroImage;
    ContextMenuScript: ContextMenuScriptPanel;
    DOTAScenePanel: ScenePanel;
    RadioButton: RadioButton;
    TextButton: TextButton;
    DOTASettingsCheckbox: SettingsCheckbox;
    ToggleButton: ToggleButton;
    DOTAHUDShopTextEntry: HUDShopTextEntry;
    TextEntry: TextEntry;
    DropDown: DropDown;
    SlottedSlider: SlottedSlider;
    Slider: SliderPanel;
    ProgressBar: ProgressBar;
    CircularProgressBar: CircularProgressBar;
    DOTAUserRichPresence: UserRichPresence;
    DOTAUserName: UserName;
    DOTAHeroMovie: HeroMovie;
    HTML: HTML;
    DOTAAccountLinkHTML: AccountLinkHTML;
    DOTAHTMLPanel: HTMLPanel;
    DOTAHeroSetList: HeroSetList;
    Carousel: CarouselPanel;
    DOTAStoreCustomControls: StoreCustomControls;
    Button: Button;
    DOTAAvatarImage: AvatarImage;
}

type PanelEvent =
    | 'onactivate'
    | 'oncancel'
    | 'oncontextmenu'
    | 'ondblclick'
    | 'ondeselect'
    | 'oneconsetloaded'
    | 'onfilled'
    | 'onfindmatchend'
    | 'onfindmatchstart'
    | 'onfocus'
    | 'oninputsubmit'
    | 'onload'
    | 'onmouseactivate'
    | 'onmouseout'
    | 'onmouseover'
    | 'onmovedown'
    | 'onmoveleft'
    | 'onmoveright'
    | 'onmoveup'
    | 'onnotfilled'
    | 'onpagesetupsuccess'
    | 'onpopupsdismissed'
    | 'onselect'
    | 'ontabforward'
    | 'ontextentrychange'
    | 'ontextentrysubmit'
    | 'ontooltiploaded'
    | 'onvaluechanged';

interface PanelBase {
    paneltype: string;
    rememberchildfocus: boolean;

    SetPanelEvent(event: PanelEvent, handler: () => void): void;
    RunScriptInPanelContext(script: string): void;
}

interface Panel extends PanelBase {
    style: VCSSStyleDeclaration;

    scrolloffset_x: number;
    scrolloffset_y: number;

    actualxoffset: number;
    actualyoffset: number;

    actuallayoutwidth: number;
    actuallayoutheight: number;

    desiredlayoutwidth: number;
    desiredlayoutheight: number;

    contentwidth: number;
    contentheight: number;

    layoutfile: string;
    id: string;

    selectionpos_x: object;
    selectionpos_y: object;

    tabindex: object;

    hittestchildren: boolean;
    hittest: boolean;
    inputnamespace: string;
    defaultfocus: string;

    checked: boolean;
    enabled: boolean;
    visible: boolean;

    IsValid(): boolean;

    AddClass(name: string): void;
    RemoveClass(name: string): void;
    BAscendantHasClass(name: string): boolean;
    BHasClass(name: string): boolean;
    SetHasClass(name: string, active: boolean): void;
    ToggleClass(name: string): void;
    SwitchClass(name: string, replacement: string): void;

    ClearPanelEvent(): void;

    SetDraggable(): void;
    IsDraggable(): boolean;

    GetChildCount(): number;
    GetChild(index: number): Panel | null;
    GetChildIndex(child: Panel): number;
    Children(): Panel[];

    FindChildrenWithClassTraverse(classname: string): Panel[];

    GetParent(): Panel | null;
    SetParent(parent: Panel): void;

    FindChild(childid: string): Panel | null;
    FindChildTraverse(childid: string): Panel | null;
    FindChildInLayoutFile(childid: string): Panel | null;

    RemoveAndDeleteChildren(): void;

    MoveChildBefore(child: PanelBase, beforeChild: PanelBase): void;
    MoveChildAfter(child: PanelBase, afterChild: PanelBase): void;

    GetPositionWithinWindow(): { x: number; y: number };
    /**
     * Sets whether to update panel with style changes
     */
    ApplyStyles(bool: boolean): void;
    ClearPropertyFromCode(): void;

    DeleteAsync(time: number): void;

    BIsTransparent(): boolean;
    BAcceptsInput(): boolean;
    BAcceptsFocus(): boolean;
    SetFocus(): void; // ??
    UpdateFocusInContext(): void; // ??

    BHasHoverStyle(): boolean;
    SetAcceptsFocus(value: boolean): void; // ??
    SetDisableFocusOnMouseDown(value: boolean): void; // ??
    BHasKeyFocus(): boolean;
    SetScrollParentToFitWhenFocused(value: boolean): void; // ??
    BScrollParentToFitWhenFocussed(): boolean;

    IsSelected(): boolean;
    BHasDescendantKeyFocus(): boolean;

    BLoadLayout(path: string, bool1: boolean, bool2: boolean): boolean;
    BLoadLayoutFromString(layout: string): boolean;
    BLoadLayoutFromStringAsync(layout: string, callback: () => void): boolean;
    BLoadLayoutAsync(path: string, callback: () => void): boolean;
    BLoadLayoutSnippet(snippetname: string): boolean;
    BCreateChildren(html: string): boolean;

    SetTopOfInputContext(): void; // ????
    SetDialogVariable(name: string, value: any): void;
    SetDialogVariableInt(name: string, value: number): void;
    SetDialogVariableTime(name: string, value: number): void;

    ScrollToTop(): void;
    ScrollToBottom(): void;
    ScrollToLeftEdge(): void;
    ScrollTORightEdge(): void;

    ScrollParentTOMakePanelFit(): void;
    BCanSeeInParentScroll(): boolean;

    GetAttributeInt(name: string, defaultvalue: number): number;
    GetAttributeString(name: string, defaultvalue: number): string;
    GetAttributeUInt32(name: string, defaultvalue: number): number;
    SetAttributeInt(name: string, value: number): void;
    SetAttributeString(name: string, value: string): void;
    SetAttributeUInt32(name: string, value: number): void;

    SetInputNamespace(namespace: string): void; // ??

    RegisterForReadyEvents(callback: (event: object) => void): void; // ????

    BReadyForDisplay(): boolean;
    SetReadyForDisplay(value: boolean): void; // ???
}

interface LabelPanel extends Panel {
    text: string;
    html: boolean;
}

type ScalingFunction =
    | 'none'
    | 'stretch' // the default
    | 'stretchx'
    | 'stretchy'
    | 'stretch-to-fit-preserve-aspect'
    | 'stretch-to-fit-x-preserve-aspect'
    | 'stretch-to-fit-y-preserve-aspect'
    | 'stretch-to-cover-preserve-aspect';

interface ImagePanel extends Panel {
    /**
     * Sets the image of this Image.
     * Example: image.SetImage("s2r://panorama/images/hud/hudv2_iconglyph.png")
     */
    SetImage(path: string): void;
    SetScaling(scale: ScalingFunction): void;
}

interface AbilityImage extends ImagePanel {
    abilityname: string;
    contextEntityIndex: AbilityEntityIndex;
}

interface ItemImage extends ImagePanel {
    itemname: string;
    contextEntityIndex: ItemEntityIndex;
}

interface HeroImage extends ImagePanel {
    heroid: HeroID;
    heroname: string;
    heroimagestyle: 'icon' | 'portrait' | 'landscape';
}

interface ContextMenuScriptPanel extends Panel {
    GetContentsPanel(): Panel;
}

type WeekendTourneyTrophyScene = ScenePanel;
interface ScenePanel extends Panel {
    FireEntityInput(entityID: string, inputName: string, value: string): void;
    PlayEntitySoundEvent(arg1: any, arg2: any): number;
    SetUnit(unitName: string, environment: string): void;
    GetPanoramaSurfacePanel(): Panel;
}

interface RadioButton extends Panel {
    GetSelectedButton(): RadioButton;
}

interface TextButton extends Panel {
    text: string;
}

type SettingsCheckbox = ToggleButton;
interface ToggleButton extends Panel {
    text: string;
    SetSelected(value: boolean): void;
}

type HUDShopTextEntry = TextEntry;
interface TextEntry extends Panel {
    text: string;

    RaiseChangeEvents(bool: boolean): void;

    SelectAll(): void;
    ClearSelection(): void;

    GetMaxCharCount(): number;
    SetMaxChars(value: number): void;

    GetCursorOffset(): number;
    SetCursorOffset(value: number): void;
}

interface DropDown extends Panel {
    HasOption(id: string): boolean;
    AddOption(panel: Panel): void;
    RemoveOption(id: string): void;
    RemoveAllOptions(): void;

    GetSelected(): Panel;
    SetSelected(id: string): void;

    AccessDropDownMenu(): Panel;
    FindDropDownMenuChild(string: string): Panel;
}

type SlottedSlider = SliderPanel;
interface SliderPanel extends PanelBase {
    value: number;
    min: number;
    max: number;

    default: number;
    increment: number;
    mousedown: boolean;

    SetDirection(value: any): void; // ??
    SetRequiresSelection(value: boolean): void;
    SetShowDefaultValue(value: boolean): void;
    SetValueNoEvents(value: number): void;
}

interface ProgressBar extends Panel {
    value: number;
    min: number;
    max: number;
}

// Needs _BG and _FG styles, see lower hud hero exp
interface CircularProgressBar extends PanelBase {
    value: number;
    min: number;
    max: number;
}

type UserRichPresence = UserName;
interface UserName extends Panel {
    steamid: string;
    accountid: string;
}

interface HeroMovie extends Panel {
    heroname: string;
    heroid: HeroID;
}

type HTML = HTMLPanel;
type AccountLinkHTML = HTMLPanel;
type StoreCustomControls = HTMLPanel;
interface HTMLPanel extends Panel {
    SetURL(url: string): void;
    SetIgnoreCursor(value: boolean): void;
    RunJavascript(js: string): void;
}

type HeroSetList = CarouselPanel;
interface CarouselPanel extends Panel {
    GetFocusIndex(): number;
    GetFocusChild(): Panel;
    SetSelectedChild(selected: Panel): void;
}

interface Button extends Panel {}

interface AvatarImage extends Panel {
    steamid: string;
}
