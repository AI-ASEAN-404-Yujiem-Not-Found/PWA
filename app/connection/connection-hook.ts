import { useEffect, useState } from "react";
import { ErrorHandler, ErrorResponseAPI, api } from "./api-connection";
import axios from "axios";

// [TO:ALEX] REFACTOR THIS CODE AS YOU KNOW THIS SHOULD BE (1 - 2 CUSTOM HOOK ONLY)
// BUT AS YOU CAN SEE !!! YOU MAKE IT (5) CUSTOM HOOK
export function usePostData<TResponse, Tbody>(){
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const exec = async (url: string, body: Tbody) => {
        try {
            setLoading(true);
            setErr(null);
            const response = await api.post<TResponse>(url, body);
            setData(response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError<ErrorResponseAPI>(error)){
                const status = error.response?.status;
                setErr(ErrorHandler(status, error.response?.data.message ?? error.response?.data.detail))
            } else {
                setErr("Unknown error")
            }
        } finally {
            setLoading(false)
        }
    }

    return {exec, data, loading, err}
}

export function usePatchData<TResponse, Tbody>(){
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const exec = async (url: string, body: Tbody) => {
        try {
            setLoading(true);
            setErr(null);
            const response = await api.patch<TResponse>(url, body);
            setData(response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError<ErrorResponseAPI>(error)){
                const status = error.response?.status;
                setErr(ErrorHandler(status, error.response?.data.message ?? error.response?.data.detail))
            } else {
                setErr("Unknown error")
            }
        } finally {
            setLoading(false)
        }
    }

    return {exec, data, loading, err}
}

export function usePutData<TResponse, Tbody>(){
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const exec = async (url: string, body: Tbody) => {
        try {
            setLoading(true);
            setErr(null);
            const response = await api.put<TResponse>(url, body);
            setData(response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError<ErrorResponseAPI>(error)){
                const status = error.response?.status;
                setErr(ErrorHandler(status, error.response?.data.message ?? error.response?.data.detail))
            } else {
                setErr("Unknown error")
            }
        } finally {
            setLoading(false)
        }
    }

    return {exec, data, loading, err}
}

export function useDeleteData<TResponse, Tbody>(){
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const exec = async (url: string, body: Tbody) => {
        try {
            setLoading(true);
            setErr(null);
            const response = await api.delete<TResponse>(url, {data: body});
            setData(response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError<ErrorResponseAPI>(error)){
                const status = error.response?.status;
                setErr(ErrorHandler(status, error.response?.data.message ?? error.response?.data.detail))
            } else {
                setErr("Unknown error")
            }
        } finally {
            setLoading(false)
        }
    }

    return {exec, data, loading, err}
}

export function useFetchData<TResponse>(){
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get<TResponse>("/getdata");
                console.log("response from connection file", response);
                setData(response.data);
                
            } catch (error : unknown) {
                if (axios.isAxiosError<ErrorResponseAPI>(error)){
                    const status = error.response?.status;
                    setErr(ErrorHandler(status, error.response?.data.detail ?? error.response?.data.message))
                } else {
                    setErr("Unknown error")
                }
                
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return {data, loading, err}
}
// [TO:ALEX] REFACTOR THIS CODE AS YOU KNOW THIS SHOULD BE (1 - 2 CUSTOM HOOK ONLY)
// BUT AS YOU CAN SEE !!! YOU MAKE IT (5) CUSTOM HOOK