import Head from "next/head";
import { useEffect, useState } from "react";
import AdminpanelLayout from "../../components/adminpanel/layout/AdminpanelLayout";

const initialAdminLoginState = {
    username: '',
    password: '',
    phoneNumber: '',
    otpNumber: '',
    emailAddress: ""
}

export default function AdminPanel(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminData, setAdminData] = useState(initialAdminLoginState)
    const [useEmail, setUseEmail] = useState(false)
    const [usePhone, setUsePhone] = useState(false)
    const [adminAgentData, setAdminAgentData] = useState([])
    const [editAgentForm, setEditAgentForm] = useState(false)
    const [websiteData, setWebsiteData] = useState([])

    useEffect(() => {
        setAdminAgentData(props.adminAgent)
        setWebsiteData(props.websiteData)
    }, [adminAgent, websiteData, props])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Admin Panel</title>
                <meta name="Description" content="Drivers Services." />
                <link rel="manifest" href="manifest.webmanifest" />
            </Head>
            <AdminpanelLayout
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                adminData={adminData}
                setAdminData={setAdminData}
                useEmail={useEmail}
                setUseEmail={setUseEmail}
                usePhone={usePhone}
                setUsePhone={setUsePhone}
                adminAgentData={adminAgentData}
                editAgentForm={editAgentForm}
                setEditAgentForm={setEditAgentForm}
                websiteData={websiteData}
                setAdminAgentData={setAdminAgentData}
            >

            </AdminpanelLayout>
        </>
    )
}

export async function getServerSideProps() {
    const { admin_agent } = await import("../../components/adminpanel/adminData/adminData.json");
    const { website_data } = await import("../../components/adminpanel/adminData/websiteData.json");

    return {
        props: {
            adminAgent: admin_agent,
            websiteData: website_data
        },
    };
}