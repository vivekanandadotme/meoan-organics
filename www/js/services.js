angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://dsquaregroup.com/meoan/',
                consumerKey: 'ck_59834bacdc3b7d8255a94e5f6cd8e425739b7c83',
                consumerSecret: 'cs_a1e19ff3277a98b2f932698017f78ed2f0b3e9bf'
            });
            return Woocommerce;
        }
}});