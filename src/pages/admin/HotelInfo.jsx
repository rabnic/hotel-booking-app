import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/SidebarAdmin";

function HotelInfoEditor() {
    const [hotelInfo, setHotelInfo] = useState({
        address: '',
        locationMap: '',
        contactInfo: '',
        socialMedia: '',
        facilities: '',
        policies: '',
        userRating: '',
        checkInTime: '',
        checkOutTime: '',
    });

    const handleChange = (field, value) => {
        setHotelInfo({ ...hotelInfo, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or update a database
        console.log('Submitted data:', hotelInfo);
    };
    return (
        <main className="flex">
            <Sidebar />
            <div>
                <h1>Hotel Information Editor</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Address:
                        <input
                            type="text"
                            value={hotelInfo.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Location Map:
                        <input
                            type="text"
                            value={hotelInfo.locationMap}
                            onChange={(e) => handleChange('locationMap', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Contact Information:
                        <input
                            type="text"
                            value={hotelInfo.contactInfo}
                            onChange={(e) => handleChange('contactInfo', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Social Media Icons:
                        <input
                            type="text"
                            value={hotelInfo.socialMedia}
                            onChange={(e) => handleChange('socialMedia', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Facilities Available:
                        <input
                            type="text"
                            value={hotelInfo.facilities}
                            onChange={(e) => handleChange('facilities', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Policies:
                        <textarea
                            value={hotelInfo.policies}
                            onChange={(e) => handleChange('policies', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        User Rating:
                        <input
                            type="text"
                            value={hotelInfo.userRating}
                            onChange={(e) => handleChange('userRating', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Check-in Time:
                        <input
                            type="text"
                            value={hotelInfo.checkInTime}
                            onChange={(e) => handleChange('checkInTime', e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Check-out Time:
                        <input
                            type="text"
                            value={hotelInfo.checkOutTime}
                            onChange={(e) => handleChange('checkOutTime', e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                </form>
            </div>
            <Outlet />
        </main>
    );
}

export default HotelInfoEditor;