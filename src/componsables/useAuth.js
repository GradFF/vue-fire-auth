import { computed, onMounted, onUnmounted, ref } from "vue";
import { auth } from "../utils/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

export const getUserState = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, resolve, reject);
  });
};
export const useAuthState = () => {
  const user = ref(null);
  const error = ref(null);

  let unsubscribe;
  onMounted(async () => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (user.value = e)
    );
  });
  onUnmounted(() => unsubscribe());

  const loggedIn = computed(() => user.value != null);

  return { user, error, loggedIn };
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const loginWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return await signOut(auth);
};
