# -*- coding: utf-8 -*-
{
    'name': "ONLYOFFICE Templates",

    'summary': "Automate form creation with inserting fields from Odoo in templates.",

    'description': "Work with fillable templates in Odoo using ONLYOFFICE. Create templates based on the data and fields available in Odoo, fill them out and print with several clicks.",

    'author': "ONLYOFFICE",
    'website': "https://www.onlyoffice.com",

    'category': 'Productivity',
    'version': '1.0.0',

    'depends': ['base', 'onlyoffice_odoo'],

    "external_dependencies": {"python": ["pyjwt"]},

    # always loaded
    'data': [
        'security/onlyoffice_templates_security.xml',
        'security/ir.model.access.csv',
        'views/onlyoffice_menu_views.xml'
    ],

    'license': 'LGPL-3',
    'support': 'support@onlyoffice.com',

    'images': [ "static/description/*.png"],

    'installable': True,
    'application': True,

    'assets': {
        'web.assets_backend': [
            'onlyoffice_odoo_templates/static/src/css/*',
            'onlyoffice_odoo_templates/static/src/views/**/*',
        ],
    },
}
