const orderSchema = {
    name : 'order',
    type: 'document',
    title: 'order',
    fields : [
        {
            name: 'firstName',
            title:  'First Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },

        {
            name: 'address',
            title: 'Address',
            type: 'string',

        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Discount',
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of :[{ type: 'refrence', to: {type: 'food'}}]
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options :{
                list : [
                    {title : 'Pending', value : 'pending'},
                    {title : 'Success' , value : 'success'},
                    {title : 'Dispatch', value : 'dispatch'} 
                ],
                layout : 'radio' //optionally ,change to 'dropdown' If ypu prefer a dropdown
            },
            initialValue : 'pending' //Default  value
        },
    ]
}

export default orderSchema;