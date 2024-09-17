document.addEventListener("DOMContentLoaded", function() {
    // Get the select elements for CPU, GPU, and RAM
    const cpuSelect = document.getElementById("cpu");
    const gpuSelect = document.getElementById("gpu");
    const ramSelect = document.getElementById("ram");

    // Price and total elements
    const cpuPriceElement = cpuSelect.closest(".form-group").querySelector(".priceper span");
    const gpuPriceElement = gpuSelect.closest(".form-group").querySelector(".priceper span");
    const ramPriceElement = ramSelect.closest(".form-group").querySelector(".priceper span");
    
    const totalElement = document.querySelector(".new-container2 .price p:nth-child(1)");
    const shippingCostElement = document.querySelector(".new-container2 .price p:nth-child(2)");
    const subTotalElement = document.querySelector(".new-container2 .price p:nth-child(3)");

    // Base prices (example values)
    const prices = {
        "intel-i9": 500,
        "amd-ryzen9": 450,
        "intel-i5": 300,
        "intel-i3": 200,
        "amd-5": 250,
        "nvidia-rtx3080": 700,
        "amd-rx6800": 600,
        "geforce-gtx1660ti": 400,
        "geforce-rtx3080": 750,
        "corsair-vengeance-lpx": 150,
        "gskill-ripjaws-v": 200,
        "crucial-ballistix-sport": 100,
        "corsair-dominator-platinum-rgb": 300,
        "gskill-trident-z5-rgb": 350
    };

    const shippingCost = 20; // Example shipping cost

    // Function to update price
    function updatePrice(selectElement, priceElement) {
        const selectedValue = selectElement.value;
        const price = prices[selectedValue] || 0;
        priceElement.innerHTML = `Price = $${price}`;
        return price;
    }

    // Function to calculate the total and subtotal
    function updateTotal() {
        const cpuTotal = updatePrice(cpuSelect, cpuPriceElement);
        const gpuTotal = updatePrice(gpuSelect, gpuPriceElement);
        const ramTotal = updatePrice(ramSelect, ramPriceElement);

        const total = cpuTotal + gpuTotal + ramTotal;
        const subTotal = total + shippingCost;

        totalElement.innerHTML = `Total = $${total}`;
        shippingCostElement.innerHTML = `Shipping cost = $${shippingCost}`;
        subTotalElement.innerHTML = `Sub Total = $${total} + $${shippingCost} = $${subTotal}`;
    }

    // Add event listeners to the select elements
    cpuSelect.addEventListener("change", updateTotal);
    gpuSelect.addEventListener("change", updateTotal);
    ramSelect.addEventListener("change", updateTotal);

    // Initialize the total on page load
    updateTotal();

    // Modal functionality
    const modal = document.getElementById("orderModal");
    const closeButton = document.querySelector(".close-button");
    const placeOrderButton = document.querySelector("button[type='submit']");
    
    placeOrderButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        modal.style.display = "block"; // Show the modal
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none"; // Hide the modal
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal if clicked outside
        }
    });
});
