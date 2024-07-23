/** @odoo-module **/
import { FormController } from "@web/views/form/form_controller";
import { patch } from "@web/core/utils/patch";
import { TemplateDialog } from "../dialog/onlyoffice_dialog";

patch(FormController.prototype, "FormController.ActionButton", {
  /**
   * @override
   **/
  getActionMenuItems() {
    const menuItems = this._super();
    menuItems.other.push({
      description: this.env._t("Print with ONLYOFFICE"),
      callback: () => {
        this.env.services.dialog.add(TemplateDialog, {
          resId: this.model.root.resId,
          resModel: this.props.resModel,
        });
      },
      skipSave: true,
    });
    return menuItems;
  },
});
