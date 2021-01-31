export const MOCK_TYPES_SERVICES = [
    {
        "enterprise_type_name": "Health",
        "id": 3
    },
    {
        "enterprise_type_name": "Service",
        "id": 12
    },
    {
        "enterprise_type_name": "IT",
        "id": 7
    },
    {
        "enterprise_type_name": "Marketplace",
        "id": 21
    },
    {
        "enterprise_type_name": "Fintech",
        "id": 2
    },
    {
        "enterprise_type_name": "HR Tech",
        "id": 6
    },
    {
        "enterprise_type_name": "Social",
        "id": 13
    },
    {
        "enterprise_type_name": "Software",
        "id": 11
    },
    {
        "enterprise_type_name": "Transport",
        "id": 24
    },
    {
        "enterprise_type_name": "Music",
        "id": 27
    },
    {
        "enterprise_type_name": "Sports",
        "id": 19
    },
    {
        "enterprise_type_name": "Green",
        "id": 28
    }
]

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}