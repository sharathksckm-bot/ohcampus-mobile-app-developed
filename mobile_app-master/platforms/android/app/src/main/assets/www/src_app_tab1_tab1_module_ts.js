(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 58341:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CHIPS_DEFAULT_OPTIONS": () => (/* binding */ MAT_CHIPS_DEFAULT_OPTIONS),
/* harmony export */   "MAT_CHIP_AVATAR": () => (/* binding */ MAT_CHIP_AVATAR),
/* harmony export */   "MAT_CHIP_REMOVE": () => (/* binding */ MAT_CHIP_REMOVE),
/* harmony export */   "MAT_CHIP_TRAILING_ICON": () => (/* binding */ MAT_CHIP_TRAILING_ICON),
/* harmony export */   "MatChip": () => (/* binding */ MatChip),
/* harmony export */   "MatChipAvatar": () => (/* binding */ MatChipAvatar),
/* harmony export */   "MatChipInput": () => (/* binding */ MatChipInput),
/* harmony export */   "MatChipList": () => (/* binding */ MatChipList),
/* harmony export */   "MatChipListChange": () => (/* binding */ MatChipListChange),
/* harmony export */   "MatChipRemove": () => (/* binding */ MatChipRemove),
/* harmony export */   "MatChipSelectionChange": () => (/* binding */ MatChipSelectionChange),
/* harmony export */   "MatChipTrailingIcon": () => (/* binding */ MatChipTrailingIcon),
/* harmony export */   "MatChipsModule": () => (/* binding */ MatChipsModule),
/* harmony export */   "ɵ0": () => (/* binding */ ɵ0)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 36461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 27817);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 39490);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 19238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 70946);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/collections */ 38345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 98295);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event object emitted by MatChip when selected or deselected. */






const _c0 = ["*"];
class MatChipSelectionChange {
    constructor(
    /** Reference to the chip that emitted the event. */
    source, 
    /** Whether the chip that emitted the event is selected. */
    selected, 
    /** Whether the selection change was a result of a user interaction. */
    isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipRemove');
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatChipTrailingIcon');
// Boilerplate for applying mixins to MatChip.
/** @docs-private */
class MatChipBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatChipMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(MatChipBase), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */
class MatChipAvatar {
}
MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) { return new (t || MatChipAvatar)(); };
MatChipAvatar.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatChipAvatar, selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]], hostAttrs: [1, "mat-chip-avatar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' },
                providers: [{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }]
            }]
    }], null, null); })();
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */
class MatChipTrailingIcon {
}
MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) { return new (t || MatChipTrailingIcon)(); };
MatChipTrailingIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatChipTrailingIcon, selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]], hostAttrs: [1, "mat-chip-trailing-icon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' },
                providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }]
            }]
    }], null, null); })();
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
class MatChip extends _MatChipMixinBase {
    constructor(elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
        super(elementRef);
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /** Whether the chip has focus. */
        this._hasFocus = false;
        /** Whether the chip list is selectable */
        this.chipListSelectable = true;
        /** Whether the chip list is in multi-selection mode. */
        this._chipListMultiple = false;
        /** Whether the chip list as a whole is disabled. */
        this._chipListDisabled = false;
        this._selected = false;
        this._selectable = true;
        this._disabled = false;
        this._removable = true;
        /** Emits when the chip is focused. */
        this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Emits when the chip is blured. */
        this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Emitted when the chip is selected or deselected. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emitted when the chip is destroyed. */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emitted when a chip is to be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._addHostClassName();
        // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.
        this._chipRippleTarget = _document.createElement('div');
        this._chipRippleTarget.classList.add('mat-chip-ripple');
        this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
        this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.RippleRenderer(this, _ngZone, this._chipRippleTarget, platform);
        this._chipRipple.setupTriggerEvents(elementRef);
        this.rippleConfig = globalRippleOptions || {};
        this._animationsDisabled = animationMode === 'NoopAnimations';
        this.tabIndex = tabIndex != null ? (parseInt(tabIndex) || -1) : -1;
    }
    /**
     * Whether ripples are disabled on interaction
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || this._animationsDisabled ||
            !!this.rippleConfig.disabled;
    }
    /** Whether the chip is selected. */
    get selected() { return this._selected; }
    set selected(value) {
        const coercedValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        if (coercedValue !== this._selected) {
            this._selected = coercedValue;
            this._dispatchSelectionChange();
        }
    }
    /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
    get value() {
        return this._value !== undefined
            ? this._value
            : this._elementRef.nativeElement.textContent;
    }
    set value(value) { this._value = value; }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     */
    get selectable() { return this._selectable && this.chipListSelectable; }
    set selectable(value) {
        this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /** Whether the chip is disabled. */
    get disabled() { return this._chipListDisabled || this._disabled; }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */
    get removable() { return this._removable; }
    set removable(value) {
        this._removable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /** The ARIA selected applied to the chip. */
    get ariaSelected() {
        // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
        // it adds noise to NVDA users where "not selected" will be read out for each chip.
        return this.selectable && (this._chipListMultiple || this.selected) ?
            this.selected.toString() : null;
    }
    _addHostClassName() {
        const basicChipAttrName = 'mat-basic-chip';
        const element = this._elementRef.nativeElement;
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    }
    ngOnDestroy() {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    }
    /** Selects the chip. */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Deselects the chip. */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Select this chip and emit selected event */
    selectViaInteraction() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Toggles the current selected state of this chip. */
    toggleSelected(isUserInput = false) {
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._changeDetectorRef.markForCheck();
        return this.selected;
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove() {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    }
    /** Handles click events on the chip. */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    }
    /** Handle custom key presses. */
    _handleKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DELETE:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    }
    _blur() {
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => {
            this._ngZone.run(() => {
                this._hasFocus = false;
                this._onBlur.next({ chip: this });
            });
        });
    }
    _dispatchSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this._selected
        });
    }
}
MatChip.ɵfac = function MatChip_Factory(t) { return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatChip.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatChip, selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]], contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"], hostVars: 14, hostBindings: function MatChip_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) { return ctx._handleClick($event); })("keydown", function MatChip_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatChip_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChip_blur_HostBindingHandler() { return ctx._blur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    } }, inputs: { color: "color", disableRipple: "disableRipple", tabIndex: "tabIndex", selected: "selected", value: "value", selectable: "selectable", disabled: "disabled", removable: "removable" }, outputs: { selectionChange: "selectionChange", destroyed: "destroyed", removed: "removed" }, exportAs: ["matChip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] }
];
MatChip.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_CHIP_AVATAR,] }],
    trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_CHIP_TRAILING_ICON,] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MAT_CHIP_REMOVE,] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
                inputs: ['color', 'disableRipple', 'tabIndex'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip mat-focus-indicator',
                    '[attr.tabindex]': 'disabled ? null : tabIndex',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.ANIMATION_MODULE_TYPE]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_CHIP_AVATAR]
        }], trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_CHIP_TRAILING_ICON]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MAT_CHIP_REMOVE]
        }] }); })();
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
class MatChipRemove {
    constructor(_parentChip, elementRef) {
        this._parentChip = _parentChip;
        if (elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
        }
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    _handleClick(event) {
        const parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    }
}
MatChipRemove.ɵfac = function MatChipRemove_Factory(t) { return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MatChipRemove.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatChipRemove, selectors: [["", "matChipRemove", ""]], hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"], hostBindings: function MatChipRemove_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }])] });
MatChipRemove.ctorParameters = () => [
    { type: MatChip },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipRemove, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)'
                },
                providers: [{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }]
            }]
    }], function () { return [{ type: MatChip }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for the chips module. */
const MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-chips-default-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatChipList.
/** @docs-private */
const _MatChipListBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(class {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
});
// Increasing integer for generating unique ids for chip-list components.
let nextUniqueId$1 = 0;
/** Change event object that is emitted when the chip list value has changed. */
class MatChipListChange {
    constructor(
    /** Chip list that emitted the event. */
    source, 
    /** Value of the chip list when the event was emitted. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
class MatChipList extends _MatChipListBase {
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Uid of the chip list */
        this._uid = `mat-chip-list-${nextUniqueId$1++}`;
        /** Tab index for the chip list. */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /** Function when touched */
        this._onTouched = () => { };
        /** Function when changed */
        this._onChange = () => { };
        this._multiple = false;
        this._compareWith = (o1, o2) => o1 === o2;
        this._required = false;
        this._disabled = false;
        /** Orientation of the chip list. */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /** Event emitted when the selected chip list value has been changed by the user. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /** The array of selected chips inside chip list. */
    get selected() {
        var _a, _b;
        return this.multiple ? (((_a = this._selectionModel) === null || _a === void 0 ? void 0 : _a.selected) || []) :
            (_b = this._selectionModel) === null || _b === void 0 ? void 0 : _b.selected[0];
    }
    /** The ARIA role applied to the chip list. */
    get role() { return this.empty ? null : 'listbox'; }
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._value; }
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-list has focus. */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() { return !this.empty || this.focused; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     */
    get selectable() { return this._selectable; }
    set selectable(value) {
        this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
        if (this.chips) {
            this.chips.forEach(chip => chip.chipListSelectable = this._selectable);
        }
    }
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...this.chips.map(chip => chip.selectionChange));
    }
    /** Combined stream of all of the child chips' focus change events. */
    get chipFocusChanges() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...this.chips.map(chip => chip._onFocus));
    }
    /** Combined stream of all of the child chips' blur change events. */
    get chipBlurChanges() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...this.chips.map(chip => chip._onBlur));
    }
    /** Combined stream of all of the child chips' remove change events. */
    get chipRemoveChanges() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...this.chips.map(chip => chip.destroyed));
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusKeyManager(this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHomeAndEnd()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed))
                .subscribe(dir => this._keyManager.withHorizontalOrientation(dir));
        }
        this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the list changes, re-subscribe
        this.chips.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(() => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(() => {
                    this._syncChipsState();
                });
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        });
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__.SelectionModel(this.multiple, undefined, false);
        this.stateChanges.next();
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
            if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
            }
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /** Associates an HTML input element with this chip list. */
    registerInput(inputElement) {
        this._chipInput = inputElement;
        // We use this attribute to match the chip list to its input in test harnesses.
        // Set the attribute directly here to avoid "changed after checked" errors.
        this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    }
    /** Attempt to focus an input if we have one. */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    _keydown(event) {
        const target = event.target;
        if (target && target.classList.contains('mat-chip')) {
            this._keyManager.onKeydown(event);
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach(chip => chip.deselect());
        if (Array.isArray(value)) {
            value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
            this._sortValues();
        }
        else {
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        const correspondingChip = this.chips.find(chip => {
            return chip.value != null && this._compareWith(chip.value, value);
        });
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        });
    }
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach(chip => {
            if (chip !== skip) {
                chip.deselect();
            }
        });
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach(chip => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(chip => chip.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(() => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                });
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /** Mark the field as touched */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(() => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(event => {
            event.source.selected
                ? this._selectionModel.select(event.source)
                : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach(chip => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                });
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        });
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe(event => {
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItem(chipIndex);
            }
            this.stateChanges.next();
        });
        this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
            this._blur();
            this.stateChanges.next();
        });
    }
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(event => {
            const chip = event.chip;
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        });
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
        return this.chips && this.chips.some(chip => chip._hasFocus);
    }
    /** Syncs the list's state with the individual chips. */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach(chip => {
                chip._chipListDisabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            });
        }
    }
}
MatChipList.ɵfac = function MatChipList_Factory(t) { return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControl, 10)); };
MatChipList.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatChipList, selectors: [["mat-chip-list"]], contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatChip, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chips = _t);
    } }, hostAttrs: [1, "mat-chip-list"], hostVars: 15, hostBindings: function MatChipList_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChipList_blur_HostBindingHandler() { return ctx._blur(); })("keydown", function MatChipList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx._uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
    } }, inputs: { ariaOrientation: ["aria-orientation", "ariaOrientation"], multiple: "multiple", compareWith: "compareWith", value: "value", required: "required", placeholder: "placeholder", disabled: "disabled", selectable: "selectable", tabIndex: "tabIndex", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, exportAs: ["matChipList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldControl, useExisting: MatChipList }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-chip-list-wrapper"]], template: function MatChipList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"], encapsulation: 2, changeDetection: 0 });
MatChipList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] }
];
MatChipList.propDecorators = {
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-orientation',] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-chip-list',
                template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'matChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'role ? required : null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.mat-chip-list-disabled]': 'disabled',
                    '[class.mat-chip-list-invalid]': 'errorState',
                    '[class.mat-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    'class': 'mat-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldControl, useExisting: MatChipList }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControl, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }]; }, { ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-orientation']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids.
let nextUniqueId = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
class MatChipInput {
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /** Whether the control is focused. */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /** Emitted when a chip is to be added. */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** The input's placeholder text. */
        this.placeholder = '';
        /** Unique id for the input. */
        this.id = `mat-chip-list-input-${nextUniqueId++}`;
        this._disabled = false;
        this.inputElement = this._elementRef.nativeElement;
    }
    /** Register input for chip list */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     */
    get addOnBlur() { return this._addOnBlur; }
    set addOnBlur(value) { this._addOnBlur = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value); }
    /** Whether the input is disabled. */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    set disabled(value) { this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value); }
    /** Whether the input is empty. */
    get empty() { return !this.inputElement.value; }
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    ngOnDestroy() {
        this.chipEnd.complete();
    }
    ngAfterContentInit() {
        this._focusLastChipOnBackspace = this.empty;
    }
    /** Utility method to make host definition/tests more clear. */
    _keydown(event) {
        if (event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.TAB && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event, 'shiftKey')) {
                this._chipList._allowFocusEscape();
            }
            // To prevent the user from accidentally deleting chips when pressing BACKSPACE continuously,
            // We focus the last chip on backspace only after the user has released the backspace button,
            // and the input is empty (see behaviour in _keyup)
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE && this._focusLastChipOnBackspace) {
                this._chipList._keyManager.setLastItemActive();
                event.preventDefault();
                return;
            }
            else {
                this._focusLastChipOnBackspace = false;
            }
        }
        this._emitChipEnd(event);
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    _keyup(event) {
        // Allow user to move focus to chips next time he presses backspace
        if (!this._focusLastChipOnBackspace && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE && this.empty) {
            this._focusLastChipOnBackspace = true;
            event.preventDefault();
        }
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    _focus() {
        this.focused = true;
        this._focusLastChipOnBackspace = this.empty;
        this._chipList.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    _emitChipEnd(event) {
        if (!this.inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({
                input: this.inputElement,
                value: this.inputElement.value,
                chipInput: this,
            });
            event === null || event === void 0 ? void 0 : event.preventDefault();
        }
    }
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /** Focuses the input. */
    focus(options) {
        this.inputElement.focus(options);
    }
    /** Clears the input */
    clear() {
        this.inputElement.value = '';
        this._focusLastChipOnBackspace = true;
    }
    /** Checks whether a keycode is one of the configured separators. */
    _isSeparatorKey(event) {
        return !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
}
MatChipInput.ɵfac = function MatChipInput_Factory(t) { return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS)); };
MatChipInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatChipInput, selectors: [["input", "matChipInputFor", ""]], hostAttrs: [1, "mat-chip-input", "mat-input-element"], hostVars: 5, hostBindings: function MatChipInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) { return ctx._keydown($event); })("keyup", function MatChipInput_keyup_HostBindingHandler($event) { return ctx._keyup($event); })("blur", function MatChipInput_blur_HostBindingHandler() { return ctx._blur(); })("focus", function MatChipInput_focus_HostBindingHandler() { return ctx._focus(); })("input", function MatChipInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    } }, inputs: { separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", chipList: ["matChipInputFor", "chipList"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"], disabled: "disabled" }, outputs: { chipEnd: "matChipInputTokenEnd" }, exportAs: ["matChipInput", "matChipInputFor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatChipInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matChipInputFor',] }],
    addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(keyup)': '_keyup($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    '[attr.aria-required]': '_chipList && _chipList.required || null'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }] }]; }, { separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matChipInputSeparatorKeyCodes']
        }], chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['matChipInputTokenEnd']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matChipInputFor']
        }], addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matChipInputAddOnBlur']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = {
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER]
};
class MatChipsModule {
}
MatChipsModule.ɵfac = function MatChipsModule_Factory(t) { return new (t || MatChipsModule)(); };
MatChipsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatChipsModule });
MatChipsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: ɵ0
        }
    ], imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatChipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher,
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: ɵ0
                    }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatChipsModule, { declarations: function () { return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]; }, exports: function () { return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=chips.js.map

/***/ }),

/***/ 17098:
/*!***********************************************!*\
  !*** ./src/app/services/shortlist.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortlistService": () => (/* binding */ ShortlistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShortlistService {
//   private shortlistedColleges = new Set<string>(); // Maintain a set of shortlisted colleges
//   private shortlistSubject = new BehaviorSubject<Set<string>>(this.shortlistedColleges);
//   // Observable to track changes to the shortlist
//   shortlist$ = this.shortlistSubject.asObservable();
//   // Add college to shortlist
//   addToShortlist(collegeId: string): void {
//     this.shortlistedColleges.add(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Remove college from shortlist
//   removeFromShortlist(collegeId: string): void {
//     this.shortlistedColleges.delete(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Check if a college is shortlisted
//   isShortlisted(collegeId: string): boolean {
//     return this.shortlistedColleges.has(collegeId);
//   }
//   // Set initial shortlist (e.g., from API response)
//   setInitialShortlist(colleges: string[]): void {
//     this.shortlistedColleges = new Set(colleges);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
// }


let ShortlistService = class ShortlistService {
    constructor() {
        this.shortlistedColleges = new Set(); // Maintain a set of shortlisted colleges
        this.shortlistSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.shortlistedColleges);
        this.shortlist$ = this.shortlistSubject.asObservable();
        this.loadShortlistedColleges(); // Load shortlist from localStorage on initialization
    }
    addToShortlist(collegeId) {
        this.shortlistedColleges.add(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    removeFromShortlist(collegeId) {
        this.shortlistedColleges.delete(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    isShortlisted(collegeId) {
        return this.shortlistedColleges.has(collegeId);
    }
    setInitialShortlist(colleges) {
        this.shortlistedColleges = new Set(colleges);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    saveShortlistedColleges() {
        const collegeIds = Array.from(this.shortlistedColleges);
        localStorage.setItem('shortlistedColleges', JSON.stringify(collegeIds));
    }
    loadShortlistedColleges() {
        const storedColleges = localStorage.getItem('shortlistedColleges');
        if (storedColleges) {
            this.shortlistedColleges = new Set(JSON.parse(storedColleges));
            this.shortlistSubject.next(this.shortlistedColleges);
        }
    }
};
ShortlistService.ctorParameters = () => [];
ShortlistService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ShortlistService);



/***/ }),

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 58341);






//import { ViewChild } from '@angular/core'










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            //ViewChild,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shortlist.service */ 17098);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);




/* eslint-disable @typescript-eslint/naming-convention */














let Tab1Page = class Tab1Page {
  constructor(iab, loadingController, router, service, activatedRoute, formBuilder, platform, alertController, googlePlus, modalController, shortlistService) {
    this.iab = iab;
    this.loadingController = loadingController;
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.platform = platform;
    this.alertController = alertController;
    this.googlePlus = googlePlus;
    this.modalController = modalController;
    this.shortlistService = shortlistService;
    this.stateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
    this.cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
    this.cityltsArry = []; // List of cities fetched from the service

    this.getprecityltsarr = []; // Original city list

    this.isModalOpen = false;
    this.colleges = [];
    this.locationArr = [];
    this.college = [];
    this.eventArry = [];
    this.topclge = [];
    this.ctyclg = [];
    this.city = [];
    this.selectcourseid = false;
    this.examArry = [];
    this.ctyArry = [];
    this.slideOpts2 = {
      initialSlide: 0,
      slidesPerView: 1.5,
      spaceBetween: 1.5
    };
    this.getCollegeList = false;
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptssevena = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptsseven = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.shortlistedColleges = new Set(); // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-inferrable-types

    this.selectedSegmentAB = '10000-100000';
    this.selectedSegmenta = 'Trending Courses';
    this.selectedSegmentb = 'Colleges';
    this.selectedSegmentc = 'segmentarticles';
    this.mycourse = [];
    this.searchCategory = [];
    this.coursesArray = [{
      name: 'Course 1'
    }, {
      name: 'Course 2'
    }, {
      name: 'Course 3'
    }];
    this.namesArray = [];
    this.getCollegeListBy = [];
    this.segmentBtn = '';
    this.expandedStatesCourse = new Array(this.getCollegeListBy.length).fill(false);
    this.loginuserId = null;
    this.isBookmarked = false;
    this.selected_loc = [];
    this.courselist = [];
    this.filteredColleges = [];
    this.showMore = false;
    this.stateltsArry = [];
    this.startLimit1 = 0;
    this.endLimit1 = 5;
    this.showViewMoreButton = false;
    this.showBackwardButton = false;
    this.displayTendingcrses = [];
    this.showViewMoreButtoncrs = false;
    this.itemsToShow = 5;
    this.displayCertificates = [];
    this.showViewMoreButtonCert = false;
    this.itemsToShowCert = 5;
    this.displayPlacements = [];
    this.showViewMoreButtonPlacement = false;
    this.itemsToShowPlacement = 5;
    this.displayArticles = [];
    this.showViewMoreButtonArticle = false;
    this.itemsToShowArticle = 5;
    this.displayFewClgArr = [];
    this.showViewMoreButtonFewClg = false;
    this.itemsToShowFewClg = 5;
    this.displayCareerArr = [];
    this.showViewMoreButtonCareer = false;
    this.itemsToShowCareer = 5;
    this.initialArticlesToShow = 5;
    this.isViewMoreButtonVisible = false;
    this.allArticles = [];
    this.displayedArticles = [];
    this.initialEventsToShow = 5;
    this.isEventViewMoreButtonVisible = false;
    this.displayedEvents = [];
    this.displayColleges = [];
    this.showViewMoreButtonclg = false;
    this.itemsToShowClg = 5;
    this.isLoading = false;
    this.getfooterNotification();
    this.feesForm = this.formBuilder.group({
      segment: ['10000-100000'] // Set initial value here

    });
    this.setupLink();
  }

  openKCETPredictor() {
    this.iab.create('https://predictor.ohcampus.com', '_system');
  }

  ngOnInit() {
    this.namesArray = [];
    this.course = [];
    const param = this.activatedRoute.snapshot.params;

    if (param) {
      const coursetenmp = param.id;
      this.crsename = param.name;
      localStorage.getItem('courses');
      this.maincat = JSON.parse(localStorage.getItem('catname'));
      console.log(this.maincat);
      this.statename = JSON.parse(localStorage.getItem('state'));
      this.coursesArray = JSON.parse(localStorage.getItem('courses') || '[]');
      let data = JSON.parse(localStorage.getItem('courses') || '[]');
      this.Artciledata = JSON.parse(localStorage.getItem('catID')); // this.Artciledata = data.map(item => item.id);
      //    console.log(this.Artciledata);

      this.crsname = this.coursesArray[0].name;

      if (this.coursesArray.length > 0) {
        this.courseId = this.coursesArray[0].id;
        this.academic_category = this.coursesArray[0].academic_category;
        localStorage.setItem("academic_category", this.academic_category);
        console.log(this.academic_category);
        localStorage.setItem('selectedCourseId', this.courseId);
        this.coursename = this.coursesArray[0].name;
        console.log(this.coursename);
        localStorage.setItem('selectedCourseName', this.coursename);
        this.catid = this.coursesArray[0].parent_category;
      }
    }

    this.admissionForm = this.formBuilder.group({
      studentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      courseLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      interestedCourses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      preferredLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      preferredCollege: [''],
      mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]{10}$')]]
    });
    this.filteredColleges = this.clgltsArry;
    this.feesForm = this.formBuilder.group({
      segment: ['']
    });
    this.cId = param.id;
    this.getarticle();
    this.getevent();
    this.certificates();
    const coursedata = localStorage.getItem('courses');
    this.coursesArray = JSON.parse(coursedata);
    this.segmentChangede(this.coursesArray[0], 1);
    this.trespeciali();
    this.selectedSegmentAB = '10000-100000';
    this.segmentChanged('10000-100000');
    this.getexm();
    this.getplacement();
    this.getcareers();
    this.loadTendingCourses();
    this.feuturedclg();
    this.getarticleforstyudentachiever();
    this.getResponseDataFromLocalStorage();
    this.getformstatelist();
    this.getCategory();
    this.getlevel();
    this.getsubcourselist();
    this.getpreferdclglts();
    this.simpleuserdata();
    this.populateUserData();
    this.getcitylist(); // Fetch city list on init

    this.saveSearchLog();
    this.selected_loc = [];
    localStorage.setItem('selectedLocationIds', this.selected_loc);
    this.filteredstate = this.stateControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(value => this.filterstate(value)));
    this.filteredCity = this.cityControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(value => this.filterCity(value)));
    this.shortlistService.shortlist$.subscribe(shortlist => {
      this.shortlistedColleges = shortlist;
    });
  }

  segmentChangede(event, type) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // Prevent multiple calls to the API if one is already in progress
      if (_this.isLoading) {
        return;
      } // Set isLoading to true to indicate the API call is in progress


      _this.isLoading = true; // Show loader only for getclgtopclg API call

      const loading = yield _this.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present(); // Get the selected course ID based on segment/tab

      _this.activeCourseId = type === 1 ? event.id : event.detail.value;
      _this.segmentBtn = _this.activeCourseId; // Run getcty and loadCollegeFees without awaiting them to prevent blocking

      _this.getcty(_this.activeCourseId);

      _this.loadCollegeFees(_this.activeCourseId);

      const selectpara = {
        courseId: _this.activeCourseId
      };
      _this.startLimit = '0';
      _this.endLimit = '20';

      try {
        // Fetch college list data based on selected course ID
        const res = yield _this.service.getclgtopclg(selectpara, _this.startLimit, _this.endLimit).toPromise();

        if (res.response_code == 200) {
          _this.getCollegeList = true;
          _this.subCatName = res.collegelist[0]?.name || '';
          _this.getCollegeListBy = res.collegelist;
          _this.CatId = res.collegelist.CatId;
        } else {
          _this.getCollegeList = false;
        }
      } catch (error) {
        console.error('Error during course data fetch:', error);
      } finally {
        // Reset isLoading to false after the API call completes
        _this.isLoading = false;
        yield loading.dismiss(); // Dismiss the loader after the main API call
      }
    })();
  }

  getfooterNotification() {
    this.service.getfooterNotification().subscribe(res => {
      console.log(res.response_data);
      this.getfooter = res.response_data;
    });
  }

  saveSearchLog() {
    const courseNames = this.coursesArray.map(x => x.name);
    let selectpara = {
      "state": this.statename,
      "course": courseNames,
      "maincat": this.maincat,
      "studentName": this.username,
      "email": this.email,
      "userid": this.loginuserId
    };
    this.service.saveSearchLog(selectpara).subscribe(res => {
      console.log(res);
    });
  }

  getcty(selectpara) {
    this.courseId = selectpara;
    this.startlimit = '0';
    this.endlimit = '5';
    this.service.getctylist(this.courseId, this.startlimit, this.endlimit, this.statename).subscribe(res => {
      this.ctyArry = res.response_data;
    });
  }

  loadCollegeFees(selectpara) {
    this.colleges = '';
    this.courseId = selectpara;
    const fees = this.selectedSegmentAB.split('-');
    const variable1 = fees[0];
    const variable2 = fees[1];
    this.min_fees = parseInt(variable1, 10);
    this.max_fees = parseInt(variable2, 10);
    this.service.getclgfees(this.min_fees, this.max_fees, this.courseId, this.statename).subscribe(res => {
      this.colleges = res.Colleges; // Full list of colleges

      this.displayColleges = this.colleges.slice(0, this.itemsToShowClg); // Show a subset of colleges

      if (this.colleges.length > this.itemsToShowClg) {
        this.showViewMoreButtonclg = true; // Show the 'Show More' button if more colleges exist
      }
    });
  } // Function to load more colleges when the 'Show More' button is clicked


  viewMoreColleges() {
    const nextSet = this.itemsToShowClg + 5; // Increase the number of items by 5

    this.displayColleges = this.colleges.slice(0, nextSet); // Update the displayed colleges
    // If there are still more colleges to show, keep the 'Show More' button visible

    if (this.displayColleges.length < this.colleges.length) {
      this.itemsToShowClg = nextSet; // Update the number of colleges to show
    } else {
      this.showViewMoreButtonclg = false; // Hide the 'Show More' button if all colleges are displayed
    }
  }

  getcitylist() {
    this.service.getLocation(this.cityform).subscribe(res => {
      this.getprecityltsarr = res.response_data;
    });
  }

  toggleView() {
    this.showMore = !this.showMore;
  }

  editpreferance() {
    this.router.navigate(['/editpreferences']);
  }

  getformstatelist() {
    this.service.statelist().subscribe(res => {
      this.stateltsArry = res.res_data; // You may want to initialize the filteredstate array after getting the list

      this.filteredstate = this.stateControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(value => this.filterstate(value)));
    });
  }

  filterstate(searchTerm) {
    if (!searchTerm) {
      return this.stateltsArry; // Return the full list if the search term is empty
    } // Make sure to check the correct property for filtering


    return this.stateltsArry.filter(state => state.statename.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  onStateSelected(state) {
    this.selectedStateId = state.id; // Store the selected state ID
    //  console.log(this.selectedStateId);

    this.admissionForm.controls.state.setValue(this.selectedStateId);
    this.stateControl.setValue(state.statename); // Set the input field to the state's name

    this.getformscitylist();
  }

  onStateInput(inputValue) {
    console.log('state input value:', inputValue); // Debugging
  }

  getformscitylist() {
    // Fetch city list based on state ID (or another condition)
    this.service.citylist(this.selectedStateId).subscribe(res => {
      this.cityltsArry = res.res_data; // Assign API response to the city list
      // console.log('City list:', this.cityltsArry);  // Debugging: log the city list
      // Apply initial filtering after cities are loaded

      this.filteredCity = this.cityControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(value => this.filterCity(value))); // console.log(this.filteredCity);
    });
  } // Filter function for searching cities


  filterCity(searchTerm) {
    if (!searchTerm) {
      return this.cityltsArry; // Return full list if no search term
    }

    return this.cityltsArry.filter(city => city.city.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive filter
    );
  } // Store the selected city ID when a city is chosen


  onCitySelected(selectedCityId) {
    this.selectedCityId = selectedCityId; // console.log('Selected City ID:', this.selectedCityId); // Debugging

    this.admissionForm.controls.city.setValue(this.selectedCityId);
  } // Optional input handler if you need additional logic for input changes


  onCityInput(inputValue) {// console.log('City input value:', inputValue); // Debugging
  }

  getpreferdclglts() {
    const selectedCoursesIds = this.admissionForm.get('interestedCourses')?.value; // Selected course IDs

    const selectedLocationIds = this.admissionForm.get('preferredLocation')?.value; // Selected location IDs

    const cityId = selectedLocationIds ? selectedLocationIds.join(',') : ''; // Convert array to string or use empty if null

    const subcategoryId = selectedCoursesIds ? selectedCoursesIds.join(',') : ''; // Convert array to string or use empty if null
    // Pass comma-separated strings to the service function

    this.service.preferdclglist(cityId, subcategoryId).subscribe(res => {
      // console.log(res);
      this.clgltsArry = res.res_data; // console.log(this.clgltsArry);

      this.filteredColleges = this.clgltsArry;
    });
  }

  onSearchCollege(event) {
    const inputValue = event.target.value;

    if (inputValue) {
      // Filter colleges by the input value (case-insensitive search)
      this.filteredColleges = this.colleges.filter(college => college.name.toLowerCase().includes(inputValue.toLowerCase()));
    } else {
      // Show the full list if the input is empty
      this.filteredColleges = this.colleges;
    }
  }

  onStateChange1(stateId) {
    this.service.citylist(stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  onCategoryChange(categoryid) {
    this.categoryID = categoryid;
  }

  onCourseLevelChange(levelId) {
    this.clevelid = levelId;
    this.getsubcourselist();
  }

  getCategory() {
    this.service.getCategory().subscribe(res => {
      this.Category = res.response_data;
    });
  }

  getlevel() {
    this.service.getlevel().subscribe(res => {
      this.clevel = res.response_data;
    });
  }

  getsubcourselist() {
    this.service.getsubclist(this.categoryID, this.clevelid).subscribe(res => {
      this.courselist = res.data;
    });
  }

  checkValidInputData(event, field) {
    const inputValue = event.target.value;

    if (field === 'studentName') {
      const sanitizedValue = inputValue.replace(/[^a-zA-Z \'-]/g, '');
      this.admissionForm.get('studentName')?.setValue(sanitizedValue, {
        emitEvent: false
      });
    } else if (field === 'mobileNumber') {
      const sanitizedValue = inputValue.replace(/[^0-9]/g, '').slice(0, 10);
      this.admissionForm.get('mobileNumber')?.setValue(sanitizedValue, {
        emitEvent: false
      });
    }
  }

  populateUserData() {
    this.simpleuserdata();
    this.getResponseDataFromLocalStorage();

    if (this.loginuserId) {
      this.admissionForm.patchValue({
        studentName: this.username,
        email: this.email
      });
    }
  }

  savmanagementform() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    } // Submit form if valid


    this.service.managementForm(this.admissionForm.value.studentName, this.admissionForm.value.state, this.admissionForm.value.city, this.admissionForm.value.category, this.admissionForm.value.courseLevel, this.admissionForm.value.interestedCourses, this.admissionForm.value.preferredLocation, this.admissionForm.value.preferredCollege, this.admissionForm.value.mobileNumber).subscribe({
      next: res => {
        this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
        this.admissionForm.reset(); // Reset the form

        this.close(); // Close modal (if applicable)

        this.setOpen(false); // Reset open state (if applicable)

        this.admissionForm.value.studentName = null, this.admissionForm.value.state = null, this.admissionForm.value.city = null, this.admissionForm.value.category = null, this.admissionForm.value.courseLevel = null, this.admissionForm.value.interestedCourses = null, this.admissionForm.value.preferredLocation = null, this.admissionForm.value.preferredCollege = null, this.admissionForm.value.mobileNumber = null, this.admissionForm.reset();
      },
      error: err => {
        this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
      }
    });
  }

  close() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this2.modalController.dismiss();
    })();
  }

  onclick(id, name) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this3.loadingController.create({
        message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
       <span style="margin-top: 10px;"> </span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading' // Optional: custom CSS class for additional styling

      }); // Present the loading

      yield loading.present(); // Store both ID and name in localStorage

      localStorage.setItem('selectedCourseId', id); // console.log(this.id);

      localStorage.setItem('activeTabId', id);
      localStorage.setItem('selectedCourseName', name); // console.log('Selected Tab ID and Name set in localStorage:', id, name);

      _this3.crsname = name;
      setTimeout( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss(); // console.log('Loading completed');
      }));
    })();
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }

  simpleuserdata() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.loginuserId = user.id;
      this.email = user.email;
      this.username = user.name;
      this.phone = user.phone;
    } else {
      console.log('No user information found in local storage.');
    }
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);

      if (responseData && responseData.length > 0) {
        this.loginuserId = responseData[0].id;
        this.username = responseData[0].f_name;
        this.email = responseData[0].email;
        this.phone = responseData[0].phone;
        this.token = responseData[0].token;
      } else {
        console.log('No user data found in response_data.');
      }
    } else {}
  }

  getarticleforstyudentachiever() {
    this.CategoryId = this.catid;
    this.service.articlbycategory(this.CategoryId).subscribe(res => {
      this.articleArry = res.response_data;
      this.displayArticles = this.articleArry.slice(0, this.itemsToShowArticle);

      if (this.articleArry.length > this.itemsToShowArticle) {
        this.showViewMoreButtonArticle = true;
      }
    });
  }

  viewMoreArticle() {
    const nextSet = this.itemsToShowArticle + 5;
    this.displayArticles = this.articleArry.slice(0, nextSet);

    if (this.displayArticles.length < this.articleArry.length) {
      this.itemsToShowArticle = nextSet;
    } else {
      this.showViewMoreButtonArticle = false;
    }
  }

  plcedtails(id) {
    this.router.navigate(['/placemntdetails', id]);
  }

  crsid(id) {
    this.router.navigate(['/trendcrsdetails', id]);
  }

  presentSignInModal() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this4.modalController.create({
        component: _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  predictadmission(id, CatId, subCatName) {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_5__.PredictadmissionPage,
        componentProps: {
          id,
          CatId,
          subCatName
        }
      });
      return yield modal.present();
    })();
  }

  dismissModal() {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this6.modalController.dismiss();
    })();
  }

  segmentChanged(segmentValue) {
    this.selectedSegmentAB = segmentValue;
    this.loadCollegeFees(this.courseId);
  }

  segmentChangedAB(segmentValue) {
    this.selectedSegmentAB = segmentValue;
  }

  ionViewWillEnter() {}

  notification() {
    this.router.navigateByUrl('/notification');
  }

  feuturedclg() {
    this.categoryId = this.catid;
    this.service.getfeatureclg(this.categoryId).subscribe(res => {
      this.fewclgArr = res.data;
      this.displayFewClgArr = this.fewclgArr.slice(0, this.itemsToShowFewClg);

      if (this.fewclgArr.length > this.itemsToShowFewClg) {
        this.showViewMoreButtonFewClg = true;
      }
    });
  }

  viewMoreFewClg() {
    const nextSet = this.itemsToShowFewClg + 5;
    this.displayFewClgArr = this.fewclgArr.slice(0, nextSet);

    if (this.displayFewClgArr.length < this.fewclgArr.length) {
      this.itemsToShowFewClg = nextSet;
    } else {
      this.showViewMoreButtonFewClg = false;
    }
  }

  getplacement() {
    this.categoryId = this.catid;
    this.service.placementclg(this.categoryId).subscribe(res => {
      this.placementarry = res.PlacementCollege;
      this.displayPlacements = this.placementarry.slice(0, this.itemsToShowPlacement);

      if (this.placementarry.length > this.itemsToShowPlacement) {
        this.showViewMoreButtonPlacement = true;
      }
    });
  }

  viewMorePlacement() {
    const nextSet = this.itemsToShowPlacement + 5;
    this.displayPlacements = this.placementarry.slice(0, nextSet);

    if (this.displayPlacements.length < this.placementarry.length) {
      this.itemsToShowPlacement = nextSet;
    } else {
      this.showViewMoreButtonPlacement = false;
    }
  }

  getcareers() {
    this.courseCatId = this.catid;
    this.service.getcareer(this.courseCatId).subscribe(res => {
      this.careerarry = res.careerslist;
      this.displayCareerArr = this.careerarry.slice(0, this.itemsToShowCareer);
      this.showViewMoreButtonCareer = this.careerarry.length > this.itemsToShowCareer;
    });
  }

  viewMoreCareers() {
    const nextSet = this.itemsToShowCareer + 5;
    this.displayCareerArr = this.careerarry.slice(0, nextSet);

    if (this.displayCareerArr.length < this.careerarry.length) {
      this.itemsToShowCareer = nextSet;
    } else {
      this.showViewMoreButtonCareer = false;
    }
  }

  creerdetails(id) {
    this.router.navigate(['/careerdetails', id]);
  }

  segmentChangeda(event) {
    this.selectedSegmenta = event.detail.value;
  }

  segmentChangedb(event) {
    this.selectedSegmentb = event.detail.value;
  }

  segmentChangedc(event) {
    this.selectedSegmentc = event.detail.value;
  }

  loadTendingCourses() {
    this.service.trendincorses(this.categoryId, this.academic_category).subscribe(res => {
      this.tendingcrses = res.data;
      this.displayTendingcrses = this.tendingcrses.slice(0, this.itemsToShow);

      if (this.tendingcrses.length > this.itemsToShow) {
        this.showViewMoreButtoncrs = true;
      }
    });
  }

  viewMorecrse() {
    const nextSet = this.itemsToShow + 5;
    this.displayTendingcrses = this.tendingcrses.slice(0, nextSet);

    if (this.displayTendingcrses.length < this.tendingcrses.length) {
      this.itemsToShow = nextSet;
    } else {
      this.showViewMoreButtoncrs = false;
    }
  }

  onShowCourse(index) {
    this.expandedStatesCourse[index] = !this.expandedStatesCourse[index];
  }

  getclgctyl(id) {
    this.selected_loc = [];
    localStorage.setItem('selectedLocationIds', this.selected_loc);
    const locId = id;
    this.router.navigate(['clglist', locId, 'clgbyloc']);
  }

  getarticledetailsview() {
    this.router.navigateByUrl('/articlcatlist');
  }

  getarticle() {
    this.searchCategory = 0;
    this.value = '';
    this.service.article(this.searchCategory, this.value, this.statename).subscribe(res => {
      this.allArticles = res.response_data;
      this.isViewMoreButtonVisible = this.allArticles.length > this.initialArticlesToShow;
    });
  }

  articlelist() {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this7.router.navigate(['/coursewisearticles']);
    })();
  }

  getevent() {
    this.service.getevents(this.value).subscribe(res => {
      this.eventArry = res.response_data;
    });
  }

  eventlist() {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this8.router.navigate(['/eventlist']);
    })();
  }

  loadMoreEvents() {
    const nextSet = this.initialEventsToShow + 5;
    this.displayedEvents = this.eventArry.slice(0, nextSet);
    this.initialEventsToShow = nextSet;
    this.isEventViewMoreButtonVisible = this.displayedEvents.length < this.eventArry.length;
  }

  getexm() {
    this.courseCatId = this.catid;
    this.service.getexams(this.courseCatId, this.statename, this.academic_category).subscribe(res => {
      this.examArry = res.examslist.slice(this.startLimit1, this.endLimit1); // Show only first 3 exams initially

      if (res.examslist.length > this.endLimit1) {
        this.showViewMoreButton = true;
      } else {
        this.showViewMoreButton = false;
      }
    });
  }

  viewMore() {
    this.startLimit1 = this.endLimit1;
    this.endLimit1 += 3;
    this.service.getexams(this.courseCatId, this.statename, this.academic_category).subscribe(res => {
      const newExams = res.examslist.slice(this.startLimit1, this.endLimit1);
      this.examArry = [...this.examArry, ...newExams];

      if (this.examArry.length >= res.examslist.length) {
        this.showViewMoreButton = false;
      }
    });
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  getclgesid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  getarticledetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  geteventdetails(event_id) {
    this.router.navigate(['/eventdetails', event_id]);
  }

  setupLink() {
    const link = document.getElementById('collegePredictorLink');

    if (link) {
      link.addEventListener('click', /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (event) {
          event.preventDefault();
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }

  certificates() {
    this.courseCatId = this.catid;
    this.service.getcertification(this.courseCatId).subscribe(res => {
      this.certificateArry = res.certificates;
      this.displayCertificates = this.certificateArry.slice(0, this.itemsToShowCert);

      if (this.certificateArry.length > this.itemsToShowCert) {
        this.showViewMoreButtonCert = true;
      }
    });
  }

  viewMoreCert() {
    const nextSet = this.itemsToShowCert + 5;
    this.displayCertificates = this.certificateArry.slice(0, nextSet);

    if (this.displayCertificates.length < this.certificateArry.length) {
      this.itemsToShowCert = nextSet;
    } else {
      this.showViewMoreButtonCert = false;
    }
  }

  certificatedtl(id) {
    this.router.navigate(['/certificatetdetails', id]);
  }

  trespeciali() {
    this.service.specilization().subscribe(res => {
      // console.log(res);
      this.trespecialiArry = res.TrendingSpecilization;
    });
  }

  examprocess(examId) {
    var _this9 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this9.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();

      _this9.router.navigate(['/examdetails', examId], {
        queryParams: {
          segment: 'Process'
        }
      }).then( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      })).catch( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      }));
    })();
  }

  examsyllabus(examId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this10.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();

      _this10.router.navigate(['/examdetails', examId], {
        queryParams: {
          segment: 'Pattern'
        }
      }).then( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      })).catch( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      }));
    })();
  }

  examdetails(examId) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this11.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();

      _this11.router.navigate(['/examdetails', examId]).then( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      })).catch( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loading.dismiss();
      }));
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } else {
        yield _this12.predictadmission(id, CatId, subCatName);
      }
    })();
  } // 2qns


  handleQuestionPaperClick(exam) {
    this.router.navigate(['/questionpaper'], {
      queryParams: {
        'examId': exam.examId
      }
    });
  } // async handleQuestionPaperClick(event: Event, questionpaperUrls: string[]) {
  //   event.preventDefault();
  //   if (this.loginuserId) {
  //     if (questionpaperUrls && questionpaperUrls.length > 0) {
  //       if (questionpaperUrls.length === 1) {
  //         // If there's only one URL, open it directly
  //         window.open(questionpaperUrls[0], '_blank');
  //       } else {
  //         // Show a modal for multiple question papers
  //         await this.showQuestionPaperModal(questionpaperUrls);
  //       }
  //     } else {
  //       await this.showAlert('Question Paper', 'Question paper data not available');
  //     }
  //   } else {
  //     this.presentSignInModal();
  //   }
  // }
  // Function to show a modal for multiple question papers with serial numbers and download icons


  showQuestionPaperModal(questionpaperUrls) {
    var _this13 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this13.alertController.create({
        header: 'Available Question Papers',
        message: _this13.generateQuestionPaperListHtml(questionpaperUrls),
        cssClass: 'custom-alert',
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });
      yield alert.present(); // Add click listeners for download icons

      questionpaperUrls.forEach((url, index) => {
        const downloadBtn = document.getElementById(`download-${index}`);

        if (downloadBtn) {
          downloadBtn.addEventListener('click', () => window.open(url, '_blank'));
        }
      });
    })();
  }

  generateQuestionPaperListHtml(questionpaperUrls) {
    return questionpaperUrls.map((url, index) => `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="margin-right: 10px;">${index + 1}.</span>
          <span style="flex-grow: 1;">Question Paper ${index + 1} &nbsp;&nbsp;&nbsp;</span>
          <ion-icon  name="download-outline"  id="download-${index}" class="download" style="cursor: pointer; color: #5d5deee3;"></ion-icon>
        </div>
      `).join('');
  }

  brochure(collegeId) {
    var _this14 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this14.loginuserId) {
        _this14.presentSignInModal();

        return;
      }

      try {
        _this14.collegeId = collegeId;
        _this14.userId = _this14.loginuserId;
        const res = yield _this14.service.getbrochure(_this14.collegeId, _this14.userId).toPromise();

        if (res.response_code === '200') {
          yield _this14.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this14.showAlert('Error', 'Brochure not available');
        } else {
          yield _this14.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this14.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this15 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this15.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  toggleShortlist(collegeId) {
    var _this16 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this16.loginuserId) {
        _this16.presentSignInModal();

        return;
      }

      try {
        if (_this16.shortlistService.isShortlisted(collegeId)) {
          yield _this16.removeclgshortlist(collegeId);
        } else {
          yield _this16.addclgshortlist(collegeId);
        }
      } catch (error) {
        console.error('Error toggling shortlist:', error);
      }
    })();
  }

  addclgshortlist(collegeId) {
    var _this17 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this17.loadingController.create({
        message: `
            <div class="custom-spinner-container">
              <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
              <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
            </div>
            <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();

      try {
        const res = yield _this17.service.addclgshortlist(_this17.loginuserId, collegeId, '1', 'insert').toPromise();

        if (res.response_code === '200') {
          _this17.shortlistService.addToShortlist(collegeId);

          yield _this17.showAlert('Success', 'College added to shortlist successfully');
        } else {
          yield _this17.showAlert('Error', 'Failed to add college to shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this17.showAlert('Error', 'An error occurred while adding to shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  removeclgshortlist(collegeId) {
    var _this18 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this18.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();

      try {
        const res = yield _this18.service.addclgshortlist(_this18.loginuserId, collegeId, '0', 'update').toPromise();

        if (res.response_code === '200') {
          _this18.shortlistService.removeFromShortlist(collegeId);

          yield _this18.showAlert('Success', 'College removed from shortlist successfully');
        } else {
          yield _this18.showAlert('Error', 'Failed to remove college from shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this18.showAlert('Error', 'An error occurred while removing from shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  isShortlisted(collegeId) {
    return this.shortlistService.isShortlisted(collegeId);
  }

  Alert(header, message) {
    var _this19 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this19.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      console.log(this.admissionForm.value);
      this.closeModal();
    } else {
      console.log('Form is invalid');
    }
  }

  onclickfess() {
    var _this20 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this20.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loading.present();
      setTimeout(() => {
        loading.dismiss();
        console.log('Loading completed');
      }, 1500);
    })();
  }

};

Tab1Page.ctorParameters = () => [{
  type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__.InAppBrowser
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__.GooglePlus
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_7__.ShortlistService
}];

Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-tab1',
  template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], Tab1Page);


/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".w200 {\n  width: 200px !important;\n}\n\n.sementspace {\n  margin-bottom: 8px;\n}\n\n.matchcard {\n  background: url(\"/assets/img/stadium.jpg\") no-repeat center center/cover;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.matchcard .matchvs {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 8px;\n}\n\nmarquee {\n  width: 100%;\n  background-color: black;\n  font-size: 14px;\n}\n\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n\n.first_section {\n  background-image: linear-gradient(to top, #ffffff 0%, #f6fcff 100%);\n  padding-top: 1rem;\n  border-radius: 24px;\n}\n\n.iconst {\n  padding-left: 5px;\n}\n\n.HeadTxt {\n  margin: 10px;\n}\n\n.HeadTxt h5 {\n  margin-bottom: 2px;\n}\n\n.HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n}\n\n.filtermlty {\n  border: 1px solid #edf9ff;\n  border-radius: 50px;\n  display: flex;\n  margin: 10px;\n  padding: 4px 4px 4px 12px;\n  background: #ffffff;\n}\n\n.filtermlty ion-input {\n  --box-shadow: none;\n  --border-radius: 50px;\n  --background: transparent;\n}\n\n.filtermlty ion-button {\n  width: 60px;\n  height: 30px;\n  margin-left: 5px;\n  --box-shadow: none;\n  text-transform: capitalize;\n  font-weight: normal;\n  border: 2px solid #fff;\n  border-radius: 4px;\n}\n\n.filtermlty ion-icon {\n  height: 22px;\n  width: 22px;\n  color: #fff;\n  padding: 7px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  margin-left: 10px;\n}\n\n.useract {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n}\n\n.useract ion-button {\n  background: #ff233e0d;\n  border-radius: 50px;\n  padding: 6px;\n  width: 30px;\n  height: 30px;\n  margin-right: 4px;\n}\n\n.useract .count {\n  display: flex;\n  align-items: center;\n}\n\n.imgarea {\n  text-align: center;\n}\n\n.imgarea img {\n  object-fit: fill;\n  width: auto;\n  border-radius: 4px;\n}\n\n.postcard {\n  margin: 8px 0px;\n  box-shadow: none;\n  border-bottom: 1px dashed darksalmon;\n  border-radius: 0;\n}\n\n.postcard p {\n  margin: 0;\n}\n\n.postcard ion-card-header {\n  padding-top: 0;\n}\n\n.uploadstoryimg img {\n  height: 120px;\n  padding: 40px;\n  padding-top: 20px;\n  object-fit: contain;\n}\n\n.slier ion-slide {\n  width: 100%;\n}\n\n.slier ion-slide .top_player {\n  width: 33.3%;\n}\n\n.setseg_name {\n  text-align: start;\n  font-size: 15px;\n  color: black;\n  --width:10%;\n}\n\n.seteditspan {\n  color: blue;\n  font-size: 16px;\n  padding-left: 6px;\n}\n\n.size_set {\n  min-height: 228px;\n  width: 400px;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 15px 12px 12px;\n  margin-top: 2rem;\n  box-shadow: rgba(205, 211, 214, 0.7) 0px 8px 20px;\n  border: 1px solid #f1f1f1;\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 12px !important;\n  text-transform: capitalize;\n  font-weight: normal;\n  --border-radius: 50px;\n}\n\n.tit_set {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  padding-top: 20px;\n  margin-top: 20px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  height: 60px;\n}\n\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 6px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.fees {\n  font-size: 16px;\n  margin: 6px 0px;\n  height: 7px;\n}\n\n.slide_sett {\n  width: 300px;\n}\n\n::md swiper-slide swiper-zoom-container hydrated swiper-slide-active {\n  width: 0;\n}\n\n.slid {\n  width: 181px;\n  text-align: start;\n  margin-right: -44px;\n}\n\n.fcard {\n  box-shadow: black 0px 58px 127px -28px inset;\n  background-size: cover !important;\n  width: 100% !important;\n  height: 153px !important;\n  border-radius: 12px;\n  margin: 0;\n  margin-left: 10px;\n  border: 1px solid darkgray;\n}\n\n.fcard img {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n.fcard .t {\n  color: #ffffff;\n  font-size: 13px;\n  margin: 0;\n  height: 62px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  padding: 6px;\n  box-shadow: rgba(0, 0, 0, 0.7) 0px -50px 20px -15px inset;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n\n.fcard .c_n {\n  color: #fff;\n  padding-top: 0px;\n  text-align: start;\n  padding-left: 14px;\n  margin-top: 0px !important;\n}\n\nion-button {\n  --border-radius: 50px;\n}\n\n.set_card {\n  width: 75%;\n  border-radius: 10px;\n}\n\n.sld {\n  flex: 30px;\n}\n\n.courserate {\n  display: flex;\n  align-items: center;\n}\n\n.courserate ion-icon {\n  color: #ff9c00;\n  margin-right: 4px;\n}\n\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -11%;\n  border: 1px solid #c9c9c9;\n}\n\n.slide_setn {\n  width: 315px !important;\n  margin-right: 2.5px;\n  margin-bottom: 4px;\n  flex: 10px;\n}\n\n.thirdsection {\n  background: #f1f5ff61;\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 10px;\n  border-radius: 24px;\n}\n\n.thirdsection ion-card {\n  background: #fff;\n}\n\n.size_setn {\n  width: 450px;\n  height: 260px;\n  padding-left: 10px;\n  border-radius: 19px;\n  padding-top: 20px;\n  word-spacing: 5px;\n  background: #f5f5f538;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding-bottom: 10px;\n}\n\n.spn {\n  padding-right: 10px;\n  font-size: 14px;\n  margin-right: 8px;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.setcard {\n  width: 100%;\n  border-radius: 10px;\n  text-align: start;\n  padding: 0px 16px;\n  box-shadow: rgba(205, 211, 214, 0.65) 0px 8px 25px;\n  margin-bottom: 1.5rem;\n}\n\n.titleset {\n  font-size: 16px;\n  color: var(--ion-color-secondary);\n  font-weight: 500;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 2px;\n}\n\n.align_list ion-label {\n  color: #5d5deee3;\n}\n\n.align_list .itemset {\n  color: var(--ion-color-primary);\n  --min-height: 35px;\n  padding-inline-start: 0 !important;\n  --padding-start: 0!important;\n}\n\n.align_list .itemset ion-label {\n  font-weight: normal;\n  margin: 0;\n}\n\n.align_list .setp_t {\n  color: #8b7f7f;\n  font-weight: bold;\n  border-radius: 15px;\n}\n\n.setatg {\n  font-size: 15px;\n  font-weight: 4px;\n}\n\n.setp_t {\n  margin-bottom: 0;\n}\n\n.slidealign .custom-card {\n  box-shadow: black 0px 58px 127px -28px inset;\n  background-size: cover !important;\n  width: 450px !important;\n  height: 153px !important;\n  border-radius: 12px;\n  margin: 0;\n  margin-left: 10px;\n  border: 1px solid darkgray;\n}\n\n.slidealign .custom-card .setclr {\n  color: #d3f2f6;\n  padding-right: 50px;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.slidealign .custom-card .setbotm {\n  color: #ffffff;\n  font-size: 13px;\n  margin: 0;\n  height: 62px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0;\n  width: 100%;\n  padding: 6px;\n  box-shadow: rgba(0, 0, 0, 0.7) 0px -50px 20px -15px inset;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n  min-width: 145px;\n}\n\n.card_align {\n  background: url('newclgimg.jpg') no-repeat center center fixed !important;\n  box-shadow: black 0px 58px 127px -28px inset;\n  background-size: cover !important;\n  width: 450px !important;\n  border-radius: 12px;\n  margin: 0;\n  margin-left: 10px;\n}\n\n.card_align .setclr {\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 13px;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.card_align .seticon {\n  position: absolute;\n  left: 11px;\n  width: 30px;\n  height: 30px;\n  bottom: 50px;\n  border-radius: 50px;\n  fill: #2196F3;\n  background: #fff;\n  border: 1px solid #2196F3;\n  display: none;\n}\n\n.card_align .setbotm {\n  color: #ffffff;\n  font-size: 14px;\n  position: absolute;\n  bottom: 0;\n  padding: 6px 10px;\n  background: #00000057;\n  width: 100%;\n  margin: 0;\n}\n\n.articlecard {\n  box-shadow: black 0px 58px 127px -28px inset;\n  background-size: cover !important;\n  width: 450px !important;\n  height: 153px !important;\n  border-radius: 12px;\n  margin: 0;\n  margin-left: 10px;\n  border: 1px solid darkgray;\n}\n\n.articletitset {\n  text-align: center;\n  font-weight: 500;\n  padding-top: 120px;\n  color: white;\n  font-size: 13px;\n  box-shadow: black 0px -50px 36px -28px inset;\n  position: absolute;\n  z-index: 1111;\n  width: 100%;\n  bottom: -16px;\n  padding: 14px;\n}\n\n.imgsetting {\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}\n\n.newscard {\n  box-shadow: black 0px 58px 127px -28px inset;\n  background-size: cover !important;\n  width: 450px !important;\n  /* height: 153px !important; */\n  border-radius: 12px;\n  margin: 0;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  border: 1px solid darkgray;\n}\n\n.newstitset {\n  text-align: center;\n  font-weight: 600;\n  /* color: white; */\n  /* box-shadow: black 0px -35px 21px -4px inset; */\n  /* position: absolute; */\n  width: 100%;\n  margin: 0px;\n}\n\n.artfooter {\n  min-height: 105px;\n  padding: 10px;\n  background-color: aliceblue;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.artfooter h6 {\n  margin: 0;\n  font-size: 15px;\n  color: #000;\n}\n\n.artfooter p {\n  margin: 8px 0px;\n  font-size: 14px;\n}\n\n.artfooter span {\n  color: #0083dc;\n}\n\n.viewtxt {\n  margin: 0 10px 10px 0px;\n  color: #0083dc;\n  text-align: right;\n}\n\n.nimgsetting {\n  width: 100%;\n  max-width: 100%;\n  height: 150px;\n  max-height: 100%;\n  object-fit: cover;\n}\n\nion-label {\n  font-weight: bold;\n}\n\n.setheading {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.setheading ion-icon {\n  margin-left: 5px;\n  color: var(--ion-color-primary);\n}\n\n.setprg {\n  font-size: 13px;\n  color: #414c61;\n  margin-bottom: 4px;\n}\n\n.iconsset1 {\n  background: #fff4e5;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n  padding: 14px 0px;\n  padding-left: 0px;\n}\n\n.iconsset1 ion-icon {\n  color: red;\n  font-size: 22px;\n}\n\n.iconsset2 {\n  background: #d3f2f6;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n  padding: 14px 0px;\n  padding-left: 0px;\n}\n\n.iconsset2 ion-icon {\n  color: #02b764;\n  font-size: 22px;\n}\n\n.iconsset3 {\n  background: #f8f4d4;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n  padding: 14px 0px;\n  padding-left: 0px;\n}\n\n.iconsset3 ion-icon {\n  color: #ff9c00;\n  font-size: 22px;\n}\n\n.iconsset4 {\n  background: #e1e6ff;\n  text-align: center;\n  height: 50px;\n  width: 50px;\n  border-radius: 10px;\n  padding: 14px 0px;\n  padding-left: 0px;\n}\n\n.iconsset4 ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n\n.sixthsection p {\n  margin-top: 0;\n}\n\n.no-bottom-padding {\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.no-bottom-padding ion-item {\n  --inner-padding-bottom: 0;\n  --padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.spn_set {\n  text-align: start;\n  color: #0083dc;\n  padding-right: 16px;\n  margin: 0;\n  padding: 12px 10px;\n  display: flex;\n  align-items: center;\n  background: aliceblue;\n  margin: 16px 0px;\n}\n\n.set_atag {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.set_atag .man_seat {\n  color: white;\n  text-align: center;\n  display: block;\n}\n\n.trending {\n  background: aliceblue;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 10px;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.custom-select {\n  --color: black;\n  /* Makes the selected text black */\n  --placeholder-color: black;\n  /* Makes the placeholder text black */\n}\n\nul.taglist {\n  padding: 0;\n}\n\nul.taglist li {\n  display: inline-block;\n  margin: 4px;\n  cursor: pointer;\n  padding: 7px 15px;\n  border-radius: 50px;\n  min-width: 50px;\n  border: 1px solid #88d834;\n  line-height: 0.875rem;\n  font-size: 0.875rem;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  outline: none;\n  box-shadow: none;\n}\n\n.seg-btnn {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 5px 3px;\n  border: 1px solid #f1f1f1;\n  min-width: 179px;\n}\n\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 7px;\n  top: 7px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\n\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n\n.description {\n  display: inline-flex;\n  align-items: center;\n}\n\n.description ion-icon {\n  margin: 2px 4px;\n}\n\n.slidebox ion-slides {\n  padding-bottom: 25px;\n}\n\n.lacselect {\n  --padding-start: 10px;\n  --background: #e0eced;\n  border-radius: 50px;\n  margin: 8px 10px 10px;\n}\n\n.lacselect ion-icon.locate {\n  margin-right: 4px;\n  font-size: 20px;\n  color: #0083dc;\n}\n\n.lacselect ion-label {\n  font-weight: normal;\n  color: #0083dc;\n}\n\nspan.spnn {\n  margin-left: 4px;\n}\n\n.modal-content {\n  padding: 20px;\n}\n\nion-modal {\n  --width: 90%;\n  --height: 90%;\n  --border-radius: 8px;\n}\n\n.centbtn {\n  margin: auto;\n  display: block;\n}\n\n.modelhead {\n  padding: 16px 16px 0;\n}\n\n.modelhead ion-icon {\n  font-size: 25px;\n  margin-left: auto;\n  display: block;\n  margin-bottom: 6px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.w-75 {\n  width: 100%;\n}\n\n.custom-spinner-container {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  /* Center the spinner container */\n}\n\n.custom-spinner-container img {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: auto;\n  border-radius: 50px;\n  --border-radius: 50px;\n}\n\n.custom-spinner-icon {\n  position: absolute;\n  width: 30px;\n  /* Adjust size of the icon */\n  height: 30px;\n  z-index: 2;\n  /* Ensure the icon is on top of the spinner */\n  border-radius: 50%;\n  /* Optional: Make the icon round */\n}\n\n.custom-spinner {\n  width: 50px;\n  /* Adjust spinner size */\n  height: 50px;\n  z-index: 1;\n}\n\n.setviewmore {\n  height: 275px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.setviewmore ion-button {\n  --border-radius: 50px;\n  --background: aliceblue;\n  --color: black;\n  height: 50px;\n  width: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.forwordicon {\n  height: 50px;\n  width: 50px;\n}\n\n.showmorefessbtn {\n  height: 175px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n  top: 59px;\n}\n\n.showmorefessbtn ion-button {\n  --border-radius: 50px;\n  --background: aliceblue;\n  --color: black;\n  height: 50px;\n  width: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.setviewmorecrs {\n  height: 175px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.setviewmorecrs ion-button {\n  --border-radius: 50px;\n  --background: aliceblue;\n  --color: black;\n  height: 50px;\n  width: 50px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.no-data-message {\n  text-align: center;\n  color: gray;\n  font-size: 16px;\n  margin-top: 20px;\n}\n\n.staricon {\n  color: #FFC107;\n}\n\n.question-paper-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n  padding: 10px;\n  background: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n\n.serial-number {\n  font-weight: bold;\n  font-size: 16px;\n  margin-right: 10px;\n  color: #555;\n}\n\n.paper-name {\n  flex-grow: 1;\n  font-size: 14px;\n  color: #333;\n  text-align: left;\n}\n\n.download-icon {\n  font-size: 20px;\n  color: #5d5deee3;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n\n.download-icon:hover {\n  color: #007bff;\n}\n\n.multy-select {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 0 10px 0 0;\n  margin-bottom: 12px;\n}\n\n.err {\n  color: #f44336;\n  font-size: 12px;\n  position: relative;\n  top: -10px;\n  left: 12px;\n}\n\nion-select::part(placeholder) {\n  opacity: 0.7 !important;\n}\n\n::ng-deep .alert-tappable.sc-ion-alert-md {\n  position: relative;\n  height: 67px !important;\n  overflow: hidden;\n}\n\n::ng-deep .alert-checkbox-label.sc-ion-alert-md {\n  padding-left: 53px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  flex: 1;\n  color: var(--ion-color-step-850, #262626);\n  font-size: 16px;\n  text-overflow: unset !important;\n  white-space: unset !important;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBLDJCQUFBO0FBcEdGOztBQXVHQTtFQUNFLGNBQUE7QUFwR0Y7O0FBc0dBO0VBQ0UseUJBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFuR0o7O0FBcUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBbEdGOztBQXFHQTtFQUNFLHVCQUFBO0FBbEdGOztBQW9HQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWpHRjs7QUFvR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQywrQkFBQTtFQUNBLDZCQUFBO0VBQ0QsZ0JBQUE7RUFDQSxtQkFBQTtBQWpHRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLncyMDB7XHJcbndpZHRoOiAyMDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmhlYWRlckJne1xyXG4vLyAgIGlvbi10b29sYmFye1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmZGZmO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4uc2VtZW50c3BhY2V7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbi5tYXRjaGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3N0YWRpdW0uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4ubWF0Y2h2c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxufVxyXG5cclxubWFycXVlZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4ubm90aWZpY2F0aW9ue1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1iYWRnZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC01JTtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXJzdF9zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmZmZmYgMCUsICNmNmZjZmYgMTAwJSk7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuLmljb25zdHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLkhlYWRUeHR7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGg1e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZpbHRlcm1sdHl7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZjlmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBpb24taW5wdXR7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH0gIFxyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH0gIFxyXG4gIGlvbi1pY29ue1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuLnVzZXJhY3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgYmFja2dyb3VuZDogI2ZmMjMzZTBkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgICAgICAgXHJcbiAgfVxyXG4gIC5jb3VudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgfVxyXG59XHJcbi5pbWdhcmVhe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaW1ne1xyXG4gICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICB9XHJcbn1cclxuLnBvc3RjYXJke1xyXG4gIG1hcmdpbjogOHB4IDBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgZGFya3NhbG1vbjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWhlYWRlcntcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxufVxyXG4udXBsb2Fkc3RvcnlpbWd7XHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG59XHJcbi5zbGllcntcclxuICBpb24tc2xpZGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC50b3BfcGxheWVye1xyXG4gICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGNvdXJzZSBuYW1lIGluIHNlZ21lbnQgYnRuXHJcblxyXG4uc2V0c2VnX25hbWV7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXdpZHRoOjEwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnNldGVkaXRzcGFue1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLnNpemVfc2V0e1xyXG4gIG1pbi1oZWlnaHQ6IDIyOHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgY29udGFpbjogdW5zZXQ7XHJcbiAgcGFkZGluZzogMTVweCAxMnB4IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuNykgMHB4IDhweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG5cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLy8gLS1wYWRkaW5nLWVuZDogMS41ZW07XHJcbiAgfVxyXG59XHJcbiBcclxuLnRpdF9zZXR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4OyBcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uc2V0X2JvdG17XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjNmM2YzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIG1hcmdpbjogNnB4IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWVze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46NnB4IDBweDtcclxuICBoZWlnaHQ6IDdweDtcclxufVxyXG5cclxuLy8gM3JkIHNlY3Rpb24gY2xnIGxvY2F0aW9uXHJcblxyXG4uc2xpZGVfc2V0dHtcclxuICB3aWR0aDozMDBweDtcclxufVxyXG4gOjptZCBzd2lwZXItc2xpZGUgc3dpcGVyLXpvb20tY29udGFpbmVyIGh5ZHJhdGVkIHN3aXBlci1zbGlkZS1hY3RpdmV7XHJcbiAgd2lkdGg6MDtcclxuIH1cclxuXHJcbi5zbGlke1xyXG4gICAgd2lkdGg6IDE4MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC00NHB4O1xyXG59XHJcblxyXG4uZmNhcmR7XHJcbiAgYm94LXNoYWRvdzogYmxhY2sgMHB4IDU4cHggMTI3cHggLTI4cHggaW5zZXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNTNweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG5cclxuXHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9jbGdfaWNvbi9paXRfYmFuZ2Fsb3JlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDE4MnB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwKSAwcHggLTUwcHggMzZweCAtMjhweCBpbnNldDtcclxuICAvLyBtYXJnaW46IDBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4udHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogNjJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNykgMHB4IC01MHB4IDIwcHggLTE1cHggaW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleFxyXG47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAvLyBjb2xvcjogI2ZmZmZmZmZjO1xyXG4gIC8vICAgcGFkZGluZy10b3A6IDBweDtcclxuICAvLyAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIC8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvLyAgIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNfbntcclxuY29sb3I6I2ZmZjtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBtYXJnaW4tdG9wOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW9uLWJ1dHRvbntcclxuLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uc2V0X2NhcmR7XHJcbiAgd2lkdGg6NzUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zbGR7XHJcbiAgZmxleDozMHB4O1xyXG59XHJcblxyXG4uY291cnNlcmF0ZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW9uLWljb257XHJcbiAgICBjb2xvcjogI2ZmOWMwMDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZ19hbGlnbntcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAtMTElO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XHJcbn1cclxuXHJcbi8vNHRoIHNlY3Rpb24gXHJcblxyXG4uc2xpZGVfc2V0bntcclxuICB3aWR0aDogMzE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBmbGV4OjEwcHg7XHJcbiB9XHJcblxyXG4udGhpcmRzZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1ZmY2MTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTNkZWcsIHJnYigyNTUgMjU1IDI1NSAvIDk0JSkgMCUsIHJnYigwIDAgMCAvIDMlKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5zaXplX3NldG57XHJcbiAgd2lkdGg6NDUwcHg7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB3b3JkLXNwYWNpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiNmNWY1ZjUzODtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLS1vdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHVuc2V0IUltcG9ydGFudDtcclxuICBjb250YWluOiB1bnNldDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNwbntcclxuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweCBcclxufVxyXG5cclxuLm0tMHtcclxuICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXRjYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDIwNSAyMTEgMjE0IC8gNjUlKSAwcHggOHB4IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4udGl0bGVzZXR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uYWxpZ25fbGlzdHtcclxuaW9uLWxhYmVse1xyXG4gIGNvbG9yOiM1ZDVkZWVlMztcclxufVxyXG5cclxuLml0ZW1zZXR7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMCFpbXBvcnRhbnQ7IFxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbi5zZXRwX3R7XHJcbiAgY29sb3I6IHJnYigxMzksIDEyNywgMTI3KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbn1cclxuXHJcbi5zZXRhdGd7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5zZXRwX3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLy8gNXRoIHNlY3Rpb24gY3NzXHJcbi5zbGlkZWFsaWdue1xyXG4gICAgLy8gd2lkdGg6MjMwcHggIWltcG9ydGFudDtcclxuLmN1c3RvbS1jYXJkIHtcclxuICAvLyAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvY2xnX2ltZy9kb3dubG9hZGNsZ2xvZ28uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgMHB4IDU4cHggMTI3cHggLTI4cHggaW5zZXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG4gIHdpZHRoOjQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNTNweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG4gIC5zZXRjbHJ7XHJcbiAgICBjb2xvcjojZDNmMmY2O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5zZXRib3Rte1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjcpIDBweCAtNTBweCAyMHB4IC0xNXB4IGluc2V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICB9XHJcbn1cclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbjogMHB4IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTQ1cHg7XHJcbn1cclxuXHJcbi8vIDZ0aCBzZWN0aW9uIFxyXG5cclxuICAuY2FyZF9hbGlnbntcclxuICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9jbGdfaW1nL25ld2NsZ2ltZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCA1OHB4IDEyN3B4IC0yOHB4IGluc2V0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAgIWltcG9ydGFudDtcclxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICB3aWR0aDo0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gaGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIC5zZXRjbHJ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5zZXRpY29ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZmlsbDogIzIxOTZGMztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZGMztcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zZXRib3Rte1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA1NztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH0gXHJcbn1cclxuICBcclxuXHJcbi8vIHNlY3Rpb24gN3RoXHJcblxyXG4vLyAuc2xpZGVzZXR7XHJcbi8vICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uYXJ0aWNsZWNhcmR7XHJcbiBcclxuXHJcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCA1OHB4IDEyN3B4IC0yOHB4IGluc2V0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1M3B4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5hcnRpY2xldGl0c2V0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwKSAwcHggLTUwcHggMzZweCAtMjhweCBpbnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDoxMTExO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTotMTZweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG4uaW1nc2V0dGluZ3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1heC13aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmV3c2NhcmR7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCA1OHB4IDEyN3B4IC0yOHB4IGluc2V0O1xyXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAvLyB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICAvLyBoZWlnaHQ6IDE1M3B4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAvLyBtYXJnaW46IDA7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgYm94LXNoYWRvdzogYmxhY2sgMHB4IDU4cHggMTI3cHggLTI4cHggaW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcclxuICAgIC8qIGhlaWdodDogMTUzcHggIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG59XHJcblxyXG4ubmV3c3RpdHNldHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICAvKiBib3gtc2hhZG93OiBibGFjayAwcHggLTM1cHggMjFweCAtNHB4IGluc2V0OyAqL1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAvLyB6LWluZGV4OiAxMTExO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gIC8vIGJvdHRvbTogLTE2cHg7XHJcbiAgLy8gcGFkZGluZzogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmFydGZvb3RlcntcclxuICAgICAgbWluLWhlaWdodDogMTA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgcHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gIH1cclxufVxyXG4udmlld3R4dHtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4IDBweDtcclxuICBjb2xvcjogIzAwODNkYztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm5pbWdzZXR0aW5ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi8vIDh0aCBzZWN0aW9uXHJcblxyXG5pb24tbGFiZWx7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZXRoZWFkaW5ne1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9mb250LXdlaWdodDogNTAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuaW9uLWljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbn1cclxuXHJcbi5zZXRwcmd7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM0MTRjNjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5pY29uc3NldDF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjRlNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTRweCAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgaW9uLWljb257XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb25zc2V0MntcclxuICBiYWNrZ3JvdW5kOiAjZDNmMmY2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNHB4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBpb24taWNvbntcclxuICAgIGNvbG9yOiAjMDJiNzY0O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb25zc2V0M3tcclxuICBiYWNrZ3JvdW5kOiAjZjhmNGQ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNHB4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuIGlvbi1pY29ue1xyXG4gICBjb2xvcjogI2ZmOWMwMDtcclxuICAgZm9udC1zaXplOiAyMnB4O1xyXG4gfSBcclxufVxyXG5cclxuLmljb25zc2V0NHtcclxuICBiYWNrZ3JvdW5kOiAjZTFlNmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNHB4IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBpb24taWNvbntcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcbi5zaXh0aHNlY3Rpb24gcHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5uby1ib3R0b20tcGFkZGluZyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1ib3R0b20tcGFkZGluZyBpb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zcG5fc2V0e1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBjb2xvcjogIzAwODNkYztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbn1cclxuLnNldF9hdGFne1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgLy8gbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgLm1hbl9zZWF0e1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi50cmVuZGluZ3tcclxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luOjEwcHg7XHJcblxyXG4uc2V0bGlzdHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICAtLWNvbG9yOiBibGFjazsgLyogTWFrZXMgdGhlIHNlbGVjdGVkIHRleHQgYmxhY2sgKi9cclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjazsgLyogTWFrZXMgdGhlIHBsYWNlaG9sZGVyIHRleHQgYmxhY2sgKi9cclxufVxyXG5cclxudWwudGFnbGlzdHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bC50YWdsaXN0IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4OGQ4MzQ7XHJcbiAgICBsaW5lLWhlaWdodDogLjg3NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNlZy1idG5ue1xyXG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbjogNXB4IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTc5cHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5pbWdfYWxpZ25ue1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICByaWdodDogN3B4O1xyXG4gICB0b3A6IDdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxufVxyXG5cclxuXHJcblxyXG4vLyAuaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc2hvcnRsaXN0ZWQgaXRlbSAqL1xyXG4vLyB9XHJcblxyXG4vLyBpb24taWNvbi5hY3RpdmUge1xyXG4vLyAgIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xyXG4vLyB9XHJcblxyXG4uaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc2hvcnRsaXN0ZWQgaXRlbSAqL1xyXG59XHJcblxyXG5pb24taWNvbi5hY3RpdmUge1xyXG4gIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xyXG59XHJcblxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpb24taWNvbntcclxuICAgIG1hcmdpbjogMnB4IDRweDtcclxuICB9XHJcbn1cclxuLnNsaWRlYm94e1xyXG4gIGlvbi1zbGlkZXN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICB9XHJcbn1cclxuLmxhY3NlbGVjdHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTBlY2VkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgbWFyZ2luOiA4cHggMTBweCAxMHB4O1xyXG4gIGlvbi1pY29uLmxvY2F0ZXtcclxuICAgIC8vY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwODNkYztcclxuICB9XHJcbn1cclxuc3Bhbi5zcG5uIHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgLS13aWR0aDogOTAlO1xyXG4gIC0taGVpZ2h0OiA5MCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jZW50YnRue1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGVsaGVhZHtcclxuICBwYWRkaW5nOjE2cHggMTZweCAwIDtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gXHJcbiAgfVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcclxuICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG4udy03NXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi5jdXN0b20tc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgc3Bpbm5lciBjb250YWluZXIgKi9cclxuICBpbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbS1zcGlubmVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzBweDsgLyogQWRqdXN0IHNpemUgb2YgdGhlIGljb24gKi9cclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogMjsgLyogRW5zdXJlIHRoZSBpY29uIGlzIG9uIHRvcCBvZiB0aGUgc3Bpbm5lciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogT3B0aW9uYWw6IE1ha2UgdGhlIGljb24gcm91bmQgKi9cclxufVxyXG5cclxuLmN1c3RvbS1zcGlubmVyIHtcclxuICB3aWR0aDogNTBweDsgLyogQWRqdXN0IHNwaW5uZXIgc2l6ZSAqL1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gXHJcbn1cclxuXHJcblxyXG4uc2V0dmlld21vcmV7XHJcbiAgaGVpZ2h0OiAyNzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBjb2xvcjogIzAwODFkYztcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgICAtLWNvbG9yOiBibGFjaztcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9yd29yZGljb257XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uc2hvd21vcmVmZXNzYnRue1xyXG4gIGhlaWdodDogMTc1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1OXB4O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnNldHZpZXdtb3JlY3Jze1xyXG4gICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGNvbG9yOiAjMDA4MWRjO1xyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3Rhcmljb257XHJcbiAgY29sb3I6ICNGRkMxMDc7IFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnF1ZXN0aW9uLXBhcGVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2VyaWFsLW51bWJlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLnBhcGVyLW5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRvd25sb2FkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzVkNWRlZWUzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG4ubXVsdHktc2VsZWN0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uZXJye1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAxMnB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwICAuYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2N3B4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xyXG4gIHBhZGRpbmctbGVmdDogNTNweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gIC1tcy1mbGV4OiAxO1xyXG4gIGZsZXg6IDE7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwgIzI2MjYyNik7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gICB0ZXh0LW92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudCA7IFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufSJdfQ== */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div>\n          <ion-icon class=\"notification\" routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div>\n    <div>\n      <ion-item lines=\"none\" style=\"--padding-start: 6px;\">\n        <ion-segment [scrollable]=\"true\" (ionChange)=\"segmentChangede($event,2)\" [(ngModel)]=\"segmentBtn\">\n          <ion-segment-button *ngFor=\"let item of coursesArray\" value=\"{{item.id}}\"\n            (click)=\"onclick(item.id,item.name)\">\n\n            <ion-label>{{item.name}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-item>\n    </div>\n    <h5 *ngIf=\"getCollegeList\" style=\"margin: 10px 10px 2px;\">Top 20 {{crsname}} colleges you might like</h5>\n\n    <p style=\"margin: 0px 10px 12px;\">Based on your preferences<span class=\"seteditspan\"\n        (click)=\"editpreferance()\">Edit</span>\n    </p>\n\n    \n<div *ngIf=\"getCollegeList\">\n    <div *ngIf=\"getCollegeListBy && getCollegeListBy.length > 0\">\n      <ion-slides [options]=\"slideOptspage\" class=\"ml-10\">\n        <ion-slide class=\"slide_set\" *ngFor=\"let getCollegeListBy of getCollegeListBy; let i = index\">\n          <ion-card class=\"size_set\">\n\n            <img class=\"img_align\" [src]=\"getCollegeListBy.logo\"\n              onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n\n\n\n         \n\n            <div class=\"img_alignn\" \n            [ngClass]=\"{'shortlisted': isShortlisted(getCollegeListBy.collegeid)}\"\n            (click)=\"toggleShortlist(getCollegeListBy.collegeid)\">\n         <ion-icon [name]=\"isShortlisted(getCollegeListBy.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                   [class.active]=\"isShortlisted(getCollegeListBy.collegeid)\">\n         </ion-icon>\n       </div>\n\n\n            <p class=\"tit_set\" (click)=\"getclgid(getCollegeListBy.collegeid)\">{{getCollegeListBy.title}}</p>\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{getCollegeListBy.city}}, {{getCollegeListBy.statename}}\n            </p>\n\n            <div class=\"text-secondary text-md mt-3\" >\n              {{getCollegeListBy.rankcategory }}: {{ getCollegeListBy.rank}}\n            </div>\n            <div class=\"text-secondary text-md mt-3\" style=\"height: 10px;\">\n              {{ getCollegeListBy.accreditation?.length > 25\n              ? (getCollegeListBy.accreditation | slice: 0:25) + '...'\n              : getCollegeListBy.accreditation }}\n            </div>\n\n\n            <div>\n              <p style=\"color:green\">{{getCollegeListBy.CourseCount}} Courses</p> \n             <p class=\"spnn\" *ngIf=\"getCollegeListBy.rating > 0\"> |<ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{getCollegeListBy.rating}}</p>\n            </div>\n\n            <div style=\"height: 14px;\">\n              <p *ngIf=\"getCollegeListBy?.total_fees\" class=\"fees\"> Annual Fees (INR): {{ getCollegeListBy.total_fees }}\n              </p>\n            </div>\n\n            <ion-button (click)=\"brochure(getCollegeListBy.collegeid)\">Brochure</ion-button>\n            <ion-button\n              (click)=\"clgpredict(getCollegeListBy.collegeid, getCollegeListBy.CatId, getCollegeListBy.subCatName)\">\n              Predict Admission\n            </ion-button>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n</div>\n<div *ngIf=\"!getCollegeList\">\n \n    <p >College not found</p>\n \n</div>\n\n<!-- section 7 -->\n    <div>\n      <h5 style=\"margin: 16px 10px;\">Daily Articles and Featured Events</h5>\n\n      <ion-segment [scrollable]=\"true\" value=\"segmentarticles\" class=\"mx10 \" (ionChange)=\"segmentChangedc($event)\">\n        <ion-segment-button class=\"seg-btn\" value=\"segmentarticles\">\n          <ion-label> Articles</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"segmentevent\">\n          <ion-label> Events</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <!-- articles segment btn -->\n      <div *ngIf=\"selectedSegmentc === 'segmentarticles'\" class=\"ion-margin-vertical\">\n\n\n\n\n        <ion-slides [options]=\"slideOptssevena\" class=\"ml-10c\">\n          <ion-slide class=\"slideset\" *ngFor=\"let article of allArticles\">\n            <ion-card class=\"newscard\" (click)=\"getarticledetails(article.id)\">\n              <img class=\"nimgsetting\" [src]=\"article.image\">\n              <div class=\"artfooter\" >\n              <h6>{{article.title }}</h6>\n              <p>{{article.subtitle }}</p>\n            \n            </div>\n              <!-- <div class=\"m10\"> <p class=\"description\"  [innerHTML]=\"article.description\"></p></div> -->\n            </ion-card>\n          </ion-slide>\n        \n          <ion-slide *ngIf=\"isViewMoreButtonVisible\">\n            <div class=\"setviewmorecrs\">\n              <ion-button (click)=\"articlelist()\">\n                <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n              </ion-button>\n            </div>\n          </ion-slide>\n        </ion-slides>\n\n      </div>\n      <h6 (click)=\"getarticledetailsview()\"  *ngIf=\"selectedSegmentc === 'segmentarticles'\"class=\"viewtxt\">View all</h6>\n    \n\n      <!-- news segment btn -->\n      <div *ngIf=\"selectedSegmentc === 'segmentevent'\" class=\"ion-margin-vertical\">\n\n        <ion-slides [options]=\"slideOptsseven\" class=\"ml-10c\">\n          <!-- Loop through displayedEvents to show them -->\n          <ion-slide class=\"slideset\" *ngFor=\"let event of eventArry\">\n            <ion-card class=\"newscard\" (click)=\"geteventdetails(event.event_id)\">\n              <img class=\"nimgsetting\" [src]=\"event.image\">\n              <p class=\"newstitset\"></p>\n              <div class=\"artfooter\" >\n                <h6>{{event.event_name}}</h6>\n                <!-- <span><u>View all</u></span> -->\n              </div>\n            </ion-card>\n          </ion-slide>\n\n\n          <ion-slide>\n            <div class=\"setviewmorecrs\">\n              <ion-button (click)=\"eventlist()\">\n                <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n              </ion-button>\n            </div>\n          </ion-slide>\n        </ion-slides>\n\n\n      </div>\n    </div>\n\n\n    <!-- 2nd section -->\n\n   \n    <div style=\"margin-top: -10px;\">\n      <!-- Check if ctyArry has data -->\n      <div *ngIf=\"ctyArry && ctyArry.length > 0; else noDataOnly\">\n        <div class=\"mx10\">\n          <h5 style=\"padding-top: 6px; margin:0;\">{{crsname}} colleges by location</h5>\n          <p style=\"margin: 6px 0 16px;\">Choose your preferred locations to explore colleges</p>\n        </div>\n\n        <div class=\"slidebox\">\n          <ion-slides pager=\"true\" [options]=\"slideOpts2\" class=\"ml-10\">\n            <ion-slide class=\"slid\" *ngFor=\"let cty of ctyArry \">\n              <ion-card class=\"fcard\" (click)=\"getclgctyl(cty.id)\">\n                <img [src]=\"cty.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              \n                <div class=\"t\">\n                  <p style=\"margin-right: 10px;\">{{cty.city}}</p>\n             \n                  <p>{{cty.collegeCount}}</p>\n                </div>\n              \n              </ion-card>\n            </ion-slide>\n\n            <ion-slide>\n              <div class=\"setviewmorecrs\">\n                <ion-button routerLink=\"/citylist\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n          <ion-item class=\"lacselect\" lines=\"none\" routerLink=\"/citylist\">\n            <ion-icon class=\"locate\" name=\"location\"></ion-icon>\n            <ion-label>Choose location</ion-label>\n            <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </div>\n      </div>\n\n      <!-- Only ion-item to display when data is not available -->\n      <ng-template #noDataOnly>\n        <ion-item class=\"lacselect\" lines=\"none\" routerLink=\"/citylist\">\n          <ion-icon class=\"locate\" name=\"location\"></ion-icon>\n          <ion-label>Choose College by location</ion-label>\n          <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ng-template>\n    </div>\n\n\n    <!-- 3rd section -->\n\n    <div class=\"thirdsection\">\n      <div>\n        <h5 class=\"mb0\" style=\"margin-top:3px; padding-bottom: 10px;\"> {{crsname}}\n          colleges based on fees</h5>\n      </div>\n      <div class=\"sementspace\">\n        <ion-segment [scrollable]=\"true\" [(ngModel)]=\"selectedSegmentAB\" class=\"segmentspace-y\"\n          (ionChange)=\"segmentChanged($event.detail.value)\">\n          <ion-segment-button value=\"10000-100000\" (click)=\"onclickfess()\">\n            <ion-label> < 1 Lakh</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"100000-200000\" (click)=\"onclickfess()\">\n            <ion-label>1-2 Lakh</ion-label>\n          </ion-segment-button>       \n          <ion-segment-button value=\"200000-300000\" (click)=\"onclickfess()\">\n            <ion-label>2-3 Lakh</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"300000-500000\" (click)=\"onclickfess()\">\n            <ion-label>3-5 Lakh</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"500000-800000\" (click)=\"onclickfess()\">\n            <ion-label>> 5 Lakh</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <!-- segment 1 -->\n\n   \n\n      <div *ngIf=\"selectedSegmentAB === '10000-100000'\">\n        <ion-slides *ngIf=\"colleges && colleges.length > 0; else noData\" [options]=\"slideOptspage\">\n          <ion-slide class=\"slide_set\" *ngFor=\"let fees of displayColleges; index as i\">\n            <ion-card class=\"size_set\">\n              <img class=\"img_align\" [src]=\"fees.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n             \n\n\n            <div class=\"img_alignn\" \n            [ngClass]=\"{'shortlisted': isShortlisted(fees.collegeid)}\"\n            (click)=\"toggleShortlist(fees.collegeid)\">\n         <ion-icon [name]=\"isShortlisted(fees.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                   [class.active]=\"isShortlisted(fees.collegeid)\">\n         </ion-icon>\n         </div>\n\n              <p class=\"tit_set\" (click)=\"getclgesid(fees.collegeid)\">{{fees.title}}</p>\n              <p class=\"set_botm\"><ion-icon name=\"location-outline\"></ion-icon>{{fees.city}}</p>\n              <div style=\"height: 10px;\">\n                {{ fees.accreditation?.length > 15 ? (fees.accreditation | slice: 0:15) + '...' : fees.accreditation }}\n              </div>\n              <p><span class=\"spn\">{{fees.coursesCount}} courses</span>\n                <span class=\"spnn\" *ngIf=\"fees.rating> 0\"><ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{fees.rating}}</span></p>\n              <div style=\"height: 14px;\">\n                <p class=\"fees\">Annual Fees (INR): {{fees.total_fees}} </p>\n              </div>\n              <a><ion-button (click)=\"brochure(fees.collegeid)\">Brochure</ion-button></a>\n              <a><ion-button (click)=\"clgpredict(fees.collegeid, fees.CatId, fees.subCatName)\">Predict\n                  Admission</ion-button></a>\n            </ion-card>\n          </ion-slide>\n          <ion-slide *ngIf=\"showViewMoreButtonclg\">\n            <div class=\"showmorefessbtn\">\n              <ion-button (click)=\"viewMoreColleges()\">\n                <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwordicon\">\n              </ion-button>\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <ng-template #noData>\n          <p>Data not found</p>\n        </ng-template>\n      </div>\n\n\n\n\n      <!-- Content for Segment 2 -->\n\n      <div *ngIf=\"selectedSegmentAB === '100000-200000'\">\n        <ion-slides *ngIf=\"colleges && colleges.length > 0; else noData\" [options]=\"slideOptspage\">\n          <ion-slide *ngFor=\"let fees of colleges \">\n            <ion-card class=\"size_set\">\n              <img class=\"img_align\" [src]=\"fees.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              \n             \n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(fees.collegeid)}\"\n              (click)=\"toggleShortlist(fees.collegeid)\">\n           <ion-icon [name]=\"isShortlisted(fees.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(fees.collegeid)\">\n           </ion-icon>\n           </div>\n\n              <p class=\"tit_set\" (click)=\"getclgesid(fees.collegeid)\">{{fees.title}}</p>\n              <p class=\"set_botm\"><ion-icon name=\"location-outline\"></ion-icon>{{fees.city}}\n\n              <div class=\"text-secondary text-md mt-3\" style=\"height: 10px;\">\n                <!-- Display the accreditation text, truncated to 15 characters if longer -->\n                {{ fees.accreditation?.length > 25\n                ? (fees.accreditation | slice: 0:25) + '...'\n                : fees.accreditation }}\n              </div>\n              <p> <span class=\"spn\">{{fees.coursesCount}} courses</span> <span\n                  class=\"spnn\"  *ngIf=\"fees.rating> 0\"> <ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{fees.rating}}</span></p>\n              <div style=\"height: 14px;\">\n                <p class=\"fees\">Annual Fees (INR): {{fees.total_fees}} </p>\n              </div> <a>\n                <ion-button (click)=\"brochure(fees.collegeid)\">\n                  Brochure\n                </ion-button></a>\n              <a>\n                <ion-button style=\"font-size: 9px;\" (click)=\"clgpredict(fees.collegeid,fees.CatId,fees.subCatName)\">\n                  Predict Admission\n                </ion-button></a>\n            </ion-card>\n          </ion-slide>\n          <ion-slide *ngIf=\"showViewMoreButtonclg\">\n            <div class=\"showmorefessbtn\">\n              <ion-button (click)=\"viewMoreColleges()\">\n                <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwordicon\">\n              </ion-button>\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <ng-template #noData>\n          <p>Data not found</p>\n        </ng-template>\n      </div>\n\n      <!-- Content for Segment 3 -->\n      <div *ngIf=\"selectedSegmentAB === '200000-300000'\">\n        <ion-slides *ngIf=\"colleges && colleges.length > 0; else noData\" [options]=\"slideOpts\">\n          <ion-slide class=\"slide_set\" *ngFor=\"let fees of colleges;  index let i=index\">\n            <ion-card class=\"size_set\">\n              <img class=\"img_align\" [src]=\"fees.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n             \n              \n\n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(fees.collegeid)}\"\n              (click)=\"toggleShortlist(fees.collegeid)\">\n           <ion-icon [name]=\"isShortlisted(fees.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(fees.collegeid)\">\n           </ion-icon>\n           </div>\n\n              <p class=\"tit_set\" (click)=\"getclgesid(fees.collegeid)\">{{fees.title}}</p>\n              <p class=\"set_botm\"><ion-icon name=\"location-outline\"></ion-icon>{{fees.city}}\n              <div class=\"text-secondary text-md mt-3\" style=\"height: 10px;\">\n                <!-- Display the accreditation text, truncated to 15 characters if longer -->\n                {{ fees.accreditation?.length > 15\n                ? (fees.accreditation | slice: 0:15) + '...'\n                : fees.accreditation }}\n              </div>\n              <p> <span class=\"spn\">{{fees.coursesCount}} courses</span> <span\n                  class=\"spnn\" *ngIf=\"fees.rating> 0\"> <ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{fees.rating}}</span></p>\n              <div style=\"height: 14px;\">\n                <p class=\"fees\">Annual Fees (INR): {{fees.total_fees}} </p>\n              </div> <a>\n                <ion-button (click)=\"brochure(fees.collegeid)\">\n                  Brochure\n                </ion-button></a>\n              <a>\n                <ion-button style=\"font-size: 9px;\" (click)=\"clgpredict(fees.collegeid,fees.CatId,fees.subCatName)\">\n                  Predict Admission\n                </ion-button></a>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n        <ng-template #noData>\n          <p>Data not found</p>\n        </ng-template>\n      </div>\n      <!-- Content for Segment 4 -->\n      <div *ngIf=\"selectedSegmentAB === '300000-500000'\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n        <ion-slides *ngIf=\"colleges && colleges.length > 0; else noData\" [options]=\"slideOpts\">\n          <ion-slide class=\"slide_set\" *ngFor=\"let fees of colleges;  index let i=index\">\n            <ion-card class=\"size_set\">\n              <img class=\"img_align\" [src]=\"fees.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n             \n             \n             \n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(fees.collegeid)}\"\n              (click)=\"toggleShortlist(fees.collegeid)\">\n           <ion-icon [name]=\"isShortlisted(fees.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(fees.collegeid)\">\n           </ion-icon>\n           </div>\n\n              <p class=\"tit_set\" (click)=\"getclgesid(fees.collegeid)\">{{fees.title}}</p>\n              <p class=\"set_botm\"><ion-icon name=\"location-outline\"></ion-icon>{{fees.city}}.#\n              <div class=\"text-secondary text-md mt-3\" style=\"height: 10px;\">\n                <!-- Display the accreditation text, truncated to 15 characters if longer -->\n                {{ fees.accreditation?.length > 15\n                ? (fees.accreditation | slice: 0:15) + '...'\n                : fees.accreditation }}\n              </div>\n              <p> <span class=\"spn\">{{fees.coursesCount}} courses</span> \n                <span class=\"spnn\" *ngIf=\"fees.rating> 0\"> <ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{fees.rating}}</span></p>\n              <div style=\"height: 14px;\">\n                <p class=\"fees\">Annual Fees (INR): {{fees.total_fees}} </p>\n              </div>\n              <a>\n                <ion-button (click)=\"brochure(fees.collegeid)\">\n                  Brochure\n                </ion-button></a>\n\n              <a>\n                <ion-button style=\"font-size: 9px;\" (click)=\"clgpredict(fees.collegeid,fees.CatId,fees.subCatName)\">\n                  Predict Admission\n                </ion-button></a>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n        <ng-template #noData>\n          <p>Data not found</p>\n        </ng-template>\n      </div>\n      <!-- Content for Segment 5 -->\n      <div *ngIf=\"selectedSegmentAB === '500000-800000'\">\n\n        <ion-slides *ngIf=\"colleges && colleges.length > 0; else noData\" [options]=\"slideOpts\">\n          <ion-slide class=\"slide_set\" *ngFor=\"let fees of colleges;  index let i=index\">\n            <ion-card class=\"size_set\">\n              <img class=\"img_align\" [src]=\"fees.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n\n            \n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(fees.collegeid)}\"\n              (click)=\"toggleShortlist(fees.collegeid)\">\n           <ion-icon [name]=\"isShortlisted(fees.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(fees.collegeid)\">\n           </ion-icon>\n           </div>\n\n              <p class=\"tit_set\" (click)=\"getclgesid(fees.collegeid)\">{{fees.title}}</p>\n              <p class=\"set_botm\"><ion-icon name=\"location-outline\"></ion-icon>{{fees.city}}.#\n              <div class=\"text-secondary text-md mt-3\" style=\"height: 10px;\">\n                <!-- Display the accreditation text, truncated to 15 characters if longer -->\n                {{ fees.accreditation?.length > 15\n                ? (fees.accreditation | slice: 0:15) + '...'\n                : fees.accreditation }}\n              </div>\n              <p> <span class=\"spn\">{{fees.coursesCount}} courses</span> \n                <span class=\"spnn\" *ngIf=\"fees.rating> 0\"> <ion-icon name=\"star-outline\" class=\"staricon\"></ion-icon> {{fees.rating}}</span>\n                 </p>\n              <div style=\"height: 14px;\">\n                <p class=\"fees\">Annual Fees (INR): {{fees.total_fees}} </p>\n              </div> <a>\n                <ion-button (click)=\"brochure(fees.collegeid)\">\n                  Brochure\n                </ion-button></a>\n\n              <a>\n                <ion-button style=\"font-size: 9px;\" (click)=\"clgpredict(fees.collegeid,fees.CatId,fees.subCatName)\">\n                  Predict Admission\n                </ion-button></a>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n\n        <ng-template #noData>\n          <p>Data not found</p>\n        </ng-template>\n      </div>\n\n    </div>\n\n    <!-- 4th section -->\n\n\n\n\n    <div  *ngIf=\"examArry?.length > 0\">\n      <div class=\"mx10\">\n        <h5 class=\"m0\">Explore your {{cId}} exam options</h5>\n        <p style=\"margin:6px 0px;\">Find the previous year question papers, exam pattern, syllabus, process, and\n          important dates.</p>\n      </div>\n\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let exam of examArry; index as i\">\n          <ion-card class=\"setcard\">\n            <img [src]=\"exam.image\" alt=\"{{ exam.title }}\" class=\"exam-image\" (click)=\"examdetails(exam.id)\">\n            <p class=\"titleset\" (click)=\"examdetails(exam.id)\">{{ exam.title }} </p>\n\n            <ion-list class=\"align_list\">\n              \n              <ion-item class=\"itemset\" lines=\"none\" (click)=\"handleQuestionPaperClick( exam)\">\n                <ion-label style=\"color:#5d5deee3\"> <a class=\"setatg\">Question Paper</a></ion-label>\n              </ion-item>\n              <!-- $event, -->\n              <ion-item class=\"itemset\" lines=\"none\">\n                <ion-label style=\"color:#5d5deee3\" (click)=\"examprocess(exam.id)\"> <a\n                    class=\"setatg\">Process</a></ion-label>\n              </ion-item>\n              <ion-item class=\"itemset\" lines=\"none\">\n                <ion-label style=\"color:#5d5deee3\"> <a class=\"setatg\"\n                    (click)=\"examsyllabus(exam.id)\">Syllabus</a></ion-label>\n              </ion-item>\n              \n            </ion-list>\n          </ion-card>\n        </ion-slide>\n        <ion-slide *ngIf=\"showViewMoreButton\">\n          <div class=\"setviewmore\">\n            <ion-button (click)=\"viewMore()\"> <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\"\n                class=\"forwordicon\"> </ion-button>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n\n    <!-- 5th section -->\n\n    <!-- <div> -->\n      <div *ngIf=\"displayTendingcrses?.length > 0 || displayCertificates?.length > 0 || displayPlacements?.length > 0 || studentAchievers?.length > 0\">\n\n      <div class=\"mx10\">\n        <h5 class=\"mt0\">Know Before You Choose</h5>\n        <p style=\"margin:6px 0px;\">Discover the trending courses, colleges, placement insights and student achievers</p>\n      </div>\n\n      <ion-segment [scrollable]=\"true\" value=\"Trending Courses\" class=\"ml10 segmentspace-y\"\n        (ionChange)=\"segmentChangeda($event)\">\n        <ion-segment-button class=\"seg-btnn\" value=\"Trending Courses\" *ngIf=\"displayTendingcrses?.length > 0\">\n\n          <ion-label>Trending Courses</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btnn\" value=\"Trending Certifications\" *ngIf=\"displayCertificates?.length > 0\">\n          <ion-label>Trending Certifications</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btnn\" value=\"Placements\" *ngIf=\"displayPlacements?.length > 0\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btnn\" value=\"Student Achievers\" *ngIf=\"studentAchievers?.length > 0\">\n          <ion-label>Student Achievers</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <div *ngIf=\"selectedSegmenta === 'Trending Courses'\">\n        <ion-row class=\"mt10\">\n          <ion-slides [options]=\"slideOpts\" class=\"ml-10\">\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayTendingcrses\">\n              <ion-card class=\"custom-card\" (click)=\"crsid(item.id)\">\n                <img [src]=\"item.image ? item.image : '../../assets/clg_img/no_image2.jpg'\" \n     [alt]=\"item.name || 'No Image Available'\" \n     loading=\"lazy\">\n\n                <!-- <img [src]=\"item.image ? item.image:'../../assets/clg_img/no_image2.jpg' \"> -->\n                <p class=\"setbotm\">{{ item.name }}</p>\n              </ion-card>\n            </ion-slide>\n            <ion-slide *ngIf=\"showViewMoreButtoncrs\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMorecrse()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwordicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </div>\n\n      <!-- Content for Segment 2 -->\n      <div *ngIf=\"selectedSegmenta === 'Trending Certifications'\">\n\n        <ion-row>\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayCertificates\">\n              <ion-card class=\"custom-card\" (click)=\"certificatedtl(item.id)\">\n                <img [src]=\"item.image\">\n                <p class=\"setbotm\">{{ item.name }}</p>\n              </ion-card>\n            </ion-slide>\n            <ion-slide *ngIf=\"showViewMoreButtonCert\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMoreCert()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n\n      </div>\n\n      <!-- Content for Segment 3 -->\n      <div *ngIf=\"selectedSegmenta === 'Placements'\">\n\n        <ion-row>\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayPlacements\">\n              <ion-card class=\"custom-card\" (click)=\"plcedtails(item.collegeid)\">\n                <img [src]=\"item.image\">\n                <p class=\"setbotm\">{{ item.title }}</p>\n              </ion-card>\n            </ion-slide>\n            <ion-slide *ngIf=\"showViewMoreButtonPlacement\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMorePlacement()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n\n      </div>\n\n      <!-- Content for Segment 4 -->\n\n\n      <div *ngIf=\"selectedSegmenta === 'Student Achievers'\">\n\n        <ion-row>\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayArticles\">\n              <ion-card class=\"custom-card\" (click)=\"getarticledetails(item.id)\">\n                <img [src]=\"item.image\">\n                <p class=\"setbotm\">{{ item.description }}</p>\n              </ion-card>\n            </ion-slide>\n            <ion-slide *ngIf=\"showViewMoreButtonArticle\">\n              <div class=\"setviewmorearticle\">\n                <ion-button (click)=\"viewMoreArticle()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </div>\n    </div>\n\n    <!-- 6th section -->\n    <div class=\"\">\n      <div class=\"HeadTxt\">\n        <h5>Beyond the basics</h5>\n        <p>Discover the leading colleges, essential exams, and career options tailored to your preferences.</p>\n      </div>\n\n      <ion-segment [scrollable]=\"true\" value=\"Colleges\" class=\"mx10 segmentspace-y\"\n        (ionChange)=\"segmentChangedb($event)\">\n        <ion-segment-button class=\"seg-btn\" value=\"Colleges\" *ngIf=\"displayFewClgArr?.length > 0\">\n          <ion-label>Colleges</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"Exames\" routerLink=\"/exames\" *ngIf=\"examArry?.length > 0\">\n          <ion-label>Exams</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"Career\" *ngIf=\"displayCareerArr?.length > 0\">\n          <ion-label>Career</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <div *ngIf=\"selectedSegmentb === 'Colleges'\">\n\n\n        <ion-row class=\"mt10\">\n          <ion-slides [options]=\"slideOpts\" class=\"ml-10\">\n            <!-- Loop through displayed featured colleges -->\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayFewClgArr\">\n              <ion-card class=\"custom-card\" (click)=\"getclgesid(item.id)\">\n                <img [src]=\"item.image\">\n                <p class=\"setbotm\">{{ item.title }}</p>\n              </ion-card>\n            </ion-slide>\n\n            <!-- Show 'Show More' button if there are more colleges -->\n            <ion-slide *ngIf=\"showViewMoreButtonFewClg\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMoreFewClg()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </div>\n\n      <!-- Content for Segment 2 -->\n      <div *ngIf=\"selectedSegmentb === 'Exames'\">\n\n        <ion-row>\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide class=\"slidealign\" *ngFor=\"let exam of examArry\">\n              <ion-card class=\"card_align\" (click)=\"examdetails(exam.id)\">\n                <div class=\"examimg\">\n                  <img [src]=\"exam.image\">\n                </div>\n                <p class=\"setbotm\">{{exam.title}}</p>\n              </ion-card>\n            </ion-slide>\n            <ion-slide *ngIf=\"showViewMoreButton\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMore()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </div>\n\n      <!-- Content for Segment 3 -->\n      <div *ngIf=\"selectedSegmentb === 'Career'\">\n\n        <ion-row>\n          <ion-slides [options]=\"slideOpts\">\n            <!-- Loop through displayCareerArr to display career items -->\n            <ion-slide class=\"slidealign\" *ngFor=\"let item of displayCareerArr\">\n              <ion-card class=\"card_align\" (click)=\"creerdetails(item.id)\">\n                <div class=\"examimg\">\n                  <img [src]=\"item.image\">\n                </div>\n                <p class=\"setbotm\">{{ item.title }}</p>\n              </ion-card>\n            </ion-slide>\n\n            <!-- Show the \"View More\" button if more items are available -->\n            <ion-slide *ngIf=\"showViewMoreButtonCareer\">\n              <div class=\"setviewmorecrs\">\n                <ion-button (click)=\"viewMoreCareers()\">\n                  <img src=\"../../assets/icon/right-arrow.png\" alt=\"arrow icon\" class=\"forwardicon\">\n                </ion-button>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </div>\n    </div>\n\n    <!-- 7th section -->\n   \n\n    <!-- 8th  setion -->\n    <div class=\"sixthsection\">\n\n      <h5 class=\"mx10\"> Discover more features</h5>\n      <ion-list class=\"no-bottom-padding\">\n        <ion-item lines=\"full\" style=\"--padding-start: 6px;\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <div class=\"iconsset1\">\n                <ion-icon name=\"git-compare-outline\"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col size=\"10\" style=\"padding-left: 10px\">\n              <a class=\"setheading\" routerLink=\"/clgcompare\">Compare College<ion-icon\n                  name=\"arrow-forward\"></ion-icon></a>\n              <p class=\"setprg\">Confused between colleges? Compare fees, Cut off, Reviews & more.\n              </p>\n              <!-- <p class=\"setprg\" style=\"color:#0083dc; font-size: 15px;\" >KCET 2025 College Predictor Link </p> -->\n          \n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n      <div class=\"sixthsection\" >\n      <div class=\"set_atag\" style=\"border-bottom: 1px solid 1px solid #e5e0e0; padding-bottom: 9px; padding-top: 9px; background-color: #0083dc;\" *ngFor=\"let getfooter of getfooter\">\n       \n            <a class=\"man_seat\"\n    [href]=\"getfooter.link\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\" >{{getfooter.notification_text}}</a>\n      </div>\n\n    </div>\n    <div>\n      <div class=\"set_atag\">\n        <a style=\"color: black;\" (click)=\"openModal()\">Looking for Management Seat?</a>\n      </div>\n\n    </div>\n  </div>\n\n  <ion-modal [isOpen]=\"isModalOpen\">\n    <ng-template>\n      <ion-content>\n        <div class=\"matfield\">\n          <div class=\"modelhead\">\n            <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\"setOpen(false)\"></ion-icon>\n            <h2>Management Seat Admission Form</h2>\n          </div>\n          <div class=\"modal-content\">\n\n            <form [formGroup]=\"admissionForm\">\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Student Name</mat-label>\n                <input matInput formControlName=\"studentName\" placeholder=\"Enter student name\"\n                  (input)=\"checkValidInputData($event, 'studentName')\">\n                <mat-error\n                  *ngIf=\"admissionForm.controls.studentName.touched && admissionForm.controls.studentName.invalid\">\n                  Student Name is required.\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>State</mat-label>\n\n                <input type=\"text\" placeholder=\"State name\" aria-label=\"State name\" matInput\n                  [formControl]=\"stateControl\" [matAutocomplete]=\"auto\" (input)=\"onStateInput($event.target.value)\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let state of filteredstate | async\" [value]=\"state.statename\"\n                    (onSelectionChange)=\"onStateSelected(state)\">\n                    {{ state.statename }}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"stateControl.invalid\">State name is required.</mat-error>\n\n              </mat-form-field>\n\n\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>City</mat-label>\n                <input type=\"text\" placeholder=\"City name\" aria-label=\"State name\" matInput [formControl]=\"cityControl\"\n                  [matAutocomplete]=\"auto12\" (input)=\"onCityInput($event.target.value)\">\n                <mat-autocomplete #auto12=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let state of filteredCity | async\" [value]=\"state.city\"\n                    (onSelectionChange)=\"onCitySelected(state.id)\">\n                    {{ state.city }}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\" cityControl.invalid\">City name is required.</mat-error>\n              </mat-form-field>\n\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Category</mat-label>\n                <mat-select formControlName=\"category\" (selectionChange)=\"onCategoryChange($event.value)\">\n                  <mat-option *ngFor=\"let item of Category\" [value]=\"item.id\">{{ item.catname }}</mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"admissionForm.controls.category.touched && admissionForm.controls.category.invalid\">\n                  Category is required.\n                </mat-error>\n              </mat-form-field>\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Course Level</mat-label>\n                <mat-select formControlName=\"courseLevel\" (selectionChange)=\"onCourseLevelChange($event.value)\">\n                  <mat-option *ngFor=\"let item of clevel\" [value]=\"item.category_id\">{{ item.name }}</mat-option>\n                </mat-select>\n                <mat-error\n                  *ngIf=\"admissionForm.controls.courseLevel.touched && admissionForm.controls.courseLevel.invalid\">\n                  Course Level is required.\n                </mat-error>\n              </mat-form-field>\n              <!-- Interested Courses -->\n\n              <ion-list class=\"multy-select\">\n                \n                  <ion-select style=\"--color: red;\" class=\"custom-select\"  placeholder=\"Select  Interested Course\" formControlName=\"interestedCourses\" [multiple]=\"true\" (ionChange)=\"getpreferdclglts()\">\n                    <ion-select-option *ngFor=\"let item of courselist\" [value]=\"item.id\">{{ item.name }}</ion-select-option>\n                    \n                  </ion-select>\n              </ion-list>\n              <div class=\"err\" *ngIf=\"admissionForm.controls.interestedCourses.touched && admissionForm.controls.interestedCourses.invalid\">\n    \n                Interested Course is required.\n              </div>\n\n              <!-- <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Interested Courses</mat-label>\n                <mat-select formControlName=\"interestedCourses\" multiple (selectionChange)=\"getpreferdclglts()\">\n                  <mat-option *ngFor=\"let item of courselist\" [value]=\"item.id\">{{ item.name }}</mat-option>\n                </mat-select>\n                <mat-error\n                  *ngIf=\"admissionForm.controls.interestedCourses.touched && admissionForm.controls.interestedCourses.invalid\">\n                  Interested Course is required.\n                </mat-error>\n              </mat-form-field> -->\n\n              <!-- Interested Courses -->\n\n              <!-- <mat-form-field class=\"w-75\" appearance=\"outline\"> -->\n                <!-- <mat-label>Preferred Location</mat-label> -->\n                <!-- <mat-select formControlName=\"preferredLocation\" multiple (selectionChange)=\"getpreferdclglts()\">\n                  <mat-option *ngFor=\"let city of getprecityltsarr\" [value]=\"city.id\">{{ city.city }}</mat-option>\n                </mat-select> -->\n              \n                <ion-list class=\"multy-select\">\n                 \n                    <ion-select placeholder=\"Select Preferred Location\"formControlName=\"preferredLocation\" [multiple]=\"true\" (ionChange)=\"getpreferdclglts()\">\n                      <ion-select-option *ngFor=\"let city of getprecityltsarr\" [value]=\"city.id\">{{ city.city }}</ion-select-option>\n                      <!-- <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n                      <ion-select-option value=\"bananas\">Bananas</ion-select-option> -->\n                    </ion-select>\n                </ion-list>\n                <div class=\"err\" *ngIf=\"admissionForm.controls.preferredLocation.touched && admissionForm.controls.preferredLocation.invalid\">\n      \n                  Preferred Location is required. \n                </div>\n            \n                      <!-- Preferred College -->\n                      <ion-list class=\"multy-select\">\n                        \n                        \n                          <ion-select class=\"Preferred\" placeholder=\"Select Preferred College\"formControlName=\"preferredCollege\" [multiple]=\"true\">\n                            <ion-select-option *ngFor=\"let clg of clgltsArry\" [value]=\"clg.id\">{{ clg.title }}</ion-select-option>\n                            <!-- <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n                            <ion-select-option value=\"bananas\">Bananas</ion-select-option> -->\n                          </ion-select>\n                       \n                      </ion-list>\n                      <div class=\"err\" *ngIf=\"admissionForm.controls.preferredCollege.touched && admissionForm.controls.preferredCollege.invalid\">\n            \n                        Preferred College is required\n                      </div>\n              <!-- <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Preferred College</mat-label>\n                <mat-select formControlName=\"preferredCollege\" multiple>\n                  <mat-option *ngFor=\"let clg of clgltsArry\" [value]=\"clg.id\">{{ clg.title }}</mat-option>\n                </mat-select>\n                <mat-error\n                  *ngIf=\"admissionForm.controls.preferredCollege.touched && admissionForm.controls.preferredCollege.invalid\">\n                  Preferred College is required.\n                </mat-error>\n              </mat-form-field> -->\n\n              <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Mobile Number</mat-label>\n                <input matInput formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\"\n                  (input)=\"checkValidInputData($event, 'mobileNumber')\">\n                <mat-error\n                  *ngIf=\"admissionForm.get('mobileNumber')?.invalid && (admissionForm.get('mobileNumber')?.touched || admissionForm.get('mobileNumber')?.dirty)\">\n                  Please enter a valid 10-digit mobile number.\n                </mat-error>\n              </mat-form-field>\n              <button mat-raised-button color=\"primary\" class=\"px-12 centbtn mt-4 mb-10\" \n              \n                (click)=\"savmanagementform()\">\n                Submit\n              </button>\n              <!-- type=\"submit\" -->\n            </form>\n          </div>\n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map