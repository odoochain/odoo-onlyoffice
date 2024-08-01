from odoo import models, api
from odoo.addons.onlyoffice_odoo.utils import file_utils

class Document(models.Model):
    _inherit = 'documents.document'

    @api.depends('checksum')
    def _compute_thumbnail(self):
        super(Document, self)._compute_thumbnail()

        for record in self:
            if record.mimetype == "application/pdf":
                record.thumbnail = False
                record.thumbnail_status = False