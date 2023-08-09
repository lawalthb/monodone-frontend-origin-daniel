export default function handler(req, res) {
    const bulkDelivery = [
      {
        id: "/img/user.png",
        name: "Nancy Chidinma",
        parcel: "gadget",
        deliverFrom: "Ikeja",
        deliverTo: "Ajah",
        userType: "Completed",
        action: ["View Order details", "Rate the Driver"],
      },
      {
        id: "/img/user.png",
        name: "Nancy Chidinma",
        parcel: "gadget",
        deliverFrom: "Ikeja",
        deliverTo: "Ajah",
        userType: "Pending",
        action: ["View Order details", "Rate the Driver"],
      },
      {
        id: "/img/user.png",
        name: "Nancy Chidinma",
        parcel: "gadget",
        deliverFrom: "Ikeja",
        deliverTo: "Ajah",
        userType: "Pending",
        action: ["View Order details", "Rate the Driver"],
      },
      {
        id: "/img/user.png",
        name: "Nancy Chidinma",
        parcel: "gadget",
        deliverFrom: "Ikeja",
        deliverTo: "Ajah",
        userType: "Pending",
        action: ["View Order details", "Rate the Driver"],
      },
      {
        id: "/img/user.png",
        name: "Nancy Chidinma",
        parcel: "gadget",
        deliverFrom: "Ikeja",
        deliverTo: "Ajah",
        userType: "Failed",
        action: ["View Order details", "Rate the Driver"],
      },
    ];
    res.status(200).json({ bulkDelivery });
  }
  