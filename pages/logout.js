
import nookies from 'nookies';

export default function Logout () {}

export async function getServerSideProps(ctx) {
    nookies.destroy(ctx, 'USER_TOKEN', {
        path: '/',
    });

    return {
        redirect: {
            destination: '/login',
            permanent: false,
        }
    }
}