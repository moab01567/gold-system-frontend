import css from "./UpdateAccountFeature.module.css";
import {useEffect, useState} from "react";
import {GetUserDTO} from "../../../../shared/backendTypes/BackendTypes.ts";
import {GetUsersService} from "./UpdateUsersService.ts";
import {Loading} from "../../../../components/loading/loading/Loading.tsx";
import {UpdateAccountRow} from "./UpdateAccountRow.tsx";

interface UpdateAccountFeatureProps {
    update?: boolean
}

export function UpdateAccountFeature({update}: UpdateAccountFeatureProps) {
    const [usersList, setUsersList] = useState<GetUserDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetUsers = async () => {
        setLoading(true);
        await GetUsersService(setUsersList);
        setLoading(false);
    };
    const updateUserList = (getUserDTO: GetUserDTO) => {
        setUsersList(
            usersList.map((user) =>
                getUserDTO.userId == user.userId ? getUserDTO : user,
            ),
        );
    };
    useEffect(() => {
        handleGetUsers();
    }, [update]);

    return (
        <>
            <div className={css.mainDiv}>
                <div className={css.gridColumn}>
                    <p>Username</p>
                    <p>اسم المستخدم</p>
                </div>
                <div className={css.gridColumn}>
                    <p>Salesperson name on invoice</p>
                    <p> اسم البائع على الفاتورة</p>
                </div>
                <div className={css.gridColumn}>
                    <p>Disable Account</p>
                    <p> تعطيل الحساب</p>
                </div>
                {loading ? (
                    <Loading/>
                ) : (
                    usersList.map((user) => (
                        <UpdateAccountRow
                            key={user.userId}
                            updateUserList={updateUserList}
                            user={user}
                        />
                    ))
                )}
            </div>
        </>
    );
}
