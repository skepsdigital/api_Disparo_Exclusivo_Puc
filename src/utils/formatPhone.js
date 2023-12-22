module.exports = formatPhone = (phone) => {
        phone = phone.replace(/[^0-9\\.]+/g, '');
        phone = phone.substr(0, 2) != '55' ? '55' + phone : phone;
        return phone;
}