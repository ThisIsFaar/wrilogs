import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useContext, useEffect, useState } from 'react';
import userContextI from '../models/UserContext';
import { auth, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';

export default function App({ Component, pageProps }: AppProps) {
  //useAuthState listen to current user in firebase, if signed in then user obj populated else null
  let [user] = useAuthState(auth);

  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    //turning of realtime subscription
    let unsubscribe;
    if (user) {
      const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return (
    <>
      <UserContext.Provider value={{ user, username }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}
