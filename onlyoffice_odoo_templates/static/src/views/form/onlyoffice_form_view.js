/** @odoo-module **/
import { FormController } from "@web/views/form/form_controller";
import { patch } from "@web/core/utils/patch";
import { TemplateDialog } from "../dialog/onlyoffice_dialog";
import { _t } from "@web/core/l10n/translation";

patch(FormController.prototype, {
  setup() {
    super.setup(...arguments);
  },
  
  getStaticActionMenuItems() {
    const { activeActions } = this.archInfo;
    const menuItems = super.getStaticActionMenuItems(...arguments);
    menuItems.printWithOnlyoffice = {
      isAvailable: () => activeActions.type === "view",
      sequence: 60,
      icon: "fa fa-print",
      description: _t("Print with ONLYOFFICE"),
      callback: () => {
        this.env.services.dialog.add(TemplateDialog, {
          formControllerProps: this.props,
        });
      },
      skipSave: true,
    }
    return menuItems
  }
});
