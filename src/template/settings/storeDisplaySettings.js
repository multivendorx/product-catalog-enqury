import { __ } from '@wordpress/i18n';

export default {
    id: 'store_display',
    priority: 10,
    name: __("Store Display Settings", "woocommerce-catalog-enquiry"),
    desc: __("Control the display of buttons across your store, specifying which button should appear.", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: 'product_galary_page',
        //     type: 'radio',
        //     label: __("Product Gallery Page (Shop, Categoty etc)", "woocommerce-catalog-enquiry"),
        //     desc: __("", "woocommerce-catalog-enquiry"),
        //     select_deselect: true,
        //     options: [
        //         {
        //             key: "product_price",
        //             label: __('Product Price', 'woocommerce-catalog-enquiry'),
        //             value: "product_price"
        //         },
        //         {
        //             key: "add_to_cart",
        //             label: __('Add-To-Cart', 'woocommerce-catalog-enquiry'),
        //             value: "add_to_cart"
        //         },
        //         {
        //             key: "enquiry_button",
        //             label: __('Enquiry Button', 'woocommerce-catalog-enquiry'),
        //             value: "enquiry_button"
        //         }
        //     ],
        //     proSetting: true,
        // },
        // {
        //     key: 'product_page',
        //     type: 'radio',
        //     label: __("Product Page", "woocommerce-catalog-enquiry"),
        //     desc: __("", "woocommerce-catalog-enquiry"),
        //     options: [
        //         {
        //             key: "product_price",
        //             label: __('Product Price', 'woocommerce-catalog-enquiry'),
        //             value: "product_price"
        //         },
        //         {
        //             key: "add_to_cart",
        //             label: __('Add-To-Cart', 'woocommerce-catalog-enquiry'),
        //             value: "add_to_cart"
        //         },
        //         {
        //             key: "enquiry_button",
        //             label: __('Enquiry Button', 'woocommerce-catalog-enquiry'),
        //             value: "enquiry_button"
        //         }
        //     ]
        // },
        {
            key: 'grid_table',
            type: 'grid_table',
            label: __("Grid Table", "woocommerce-catalog-enquiry"),
            desc: __("Grid Table", "woocommerce-catalog-enquiry"),
            classes: 'gridTable',
            rows: [
                {
                    key: "product_galary_page",
                    label: __("Product Gallery Page (Shop, Categoty etc)", "woocommerce-catalog-enquiry")
                },
                {
                    key: "product_page",
                    label: __("Product Page", "woocommerce-catalog-enquiry")
                }
            ],
            columns: [
                {
                    key: "product_price",
                    label: __('Product Price', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "add_to_cart",
                    label: __('Add-To-Cart', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "enquiry_button",
                    label: __('Enquiry Button', 'woocommerce-catalog-enquiry'),
                }
            ],
        },

        {
            key: 'separator_content',
            type: 'section',
            label: "",
            desc: "Automatic mode",
            hint: "Initiate the <b>real-time synchronization</b> direction between your WordPress and Moodle sites.<br>When a new user is added, their profile will be synchronized between WordPress and Moodle according to the Profile Information Mapping settings.<br>For an existing user, if they update their profile and the updated data matches any criteria set in the 'Profile Information Mapping', their information will also be synchronized between WordPress and Moodle."
        },

        {
            key: 'grid_table',
            type: 'grid_table',
            label: __("Grid Table", "woocommerce-catalog-enquiry"),
            desc: __("Grid Table", "woocommerce-catalog-enquiry"),
            classes: 'gridTable',
            rows: [
                {
                    key: "logged_out",
                    label: __('Logged out users', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "logged_in",
                    label: __('Logged in users', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "all_users",
                    label: __('All users', 'woocommerce-catalog-enquiry'),
                }
            ],
            columns: [
                {
                    key: "catalog",
                    label: __("Catalog", "woocommerce-catalog-enquiry")
                },
                {
                    key: "enquiry",
                    label: __("Enquiry", "woocommerce-catalog-enquiry")
                },
                {
                    key: "quote",
                    label: __("Quote", "woocommerce-catalog-enquiry")
                }
            ],
        }
    ]
};
