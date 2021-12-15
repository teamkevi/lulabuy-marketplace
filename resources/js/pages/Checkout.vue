<template>
    <div>
        <h1 class="text-3xl my-8">Checkout</h1>
        <div class="flex gap-x-12">
            <div class="basis-3/5">
                <div class="border-b flex justify-between py-4 items-center">
                    <div class="flex gap-x-8 items-center">
                        <img class="h-40 rounded" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
                        <div>
                            <p class="font-medium text-lg">A Cool Item</p>
                            <p class="text-base">RM23.90</p>
                        </div>
                    </div>
                    <div>
                        <button>-</button>
                        <input type="number">
                        <button>+</button>
                    </div>
                    <p class="font-bold text-lg">RM54.90</p>
                </div>
                <div class="border-b flex justify-between py-4 items-center">
                    <div class="flex gap-x-8 items-center">
                        <img class="h-40 rounded" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
                        <div>
                            <p class="font-medium text-lg">A Cool Item</p>
                            <p class="text-base">RM23.90</p>
                        </div>
                    </div>
                    <div>
                        <button>-</button>
                        <input type="number">
                        <button>+</button>
                    </div>
                    <p class="font-bold text-lg">RM54.90</p>
                </div>
            </div>
            <div class="basis-2/5 card p-4 bg-gray-100 border-0">
                <h2 class="text-lg font-bold mb-2">Order Summary</h2>
                <table class="w-full border-collapse">
                    <tbody>
                        <tr class="border-b border-gray-300">
                            <td class="py-3">Subtotal</td>
                            <td class="text-right">RM14.90</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="py-3">Delivery Fee</td>
                            <td class="text-right">RM5.00</td>
                        </tr>
                        <tr class="border-b border-gray-300">
                            <td class="py-3">Tax</td>
                            <td class="text-right">RM2.50</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="text-lg font-bold">
                            <td class="py-3">Order Total</td>
                            <td class="text-right">RM20.90</td>
                        </tr>
                    </tfoot>
                </table>
                <button class="text-white py-2.5 bg-red-600 hover:bg-red-700 rounded">Checkout</button>
            </div>
        </div>
    </div>
</template>