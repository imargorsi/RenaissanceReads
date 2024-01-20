// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wqhlyhvifxyzmuipyzsn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaGx5aHZpZnh5em11aXB5enNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1Njc4NDYsImV4cCI6MjAxOTE0Mzg0Nn0.izpCek4-jDbkC078LnaaF0GRF_fwuCWLs8dmWqSpcSU"
);

export default supabase;
