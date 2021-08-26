"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schemas = function (db) {
    var createRideTableSchema = "\n        CREATE TABLE Rides\n        (\n        rideID INTEGER PRIMARY KEY AUTOINCREMENT,\n        startLat DECIMAL NOT NULL,\n        startLong DECIMAL NOT NULL,\n        endLat DECIMAL NOT NULL,\n        endLong DECIMAL NOT NULL,\n        riderName TEXT NOT NULL,\n        driverName TEXT NOT NULL,\n        driverVehicle TEXT NOT NULL,\n        created DATETIME default CURRENT_TIMESTAMP\n        )\n    ";
    db.run(createRideTableSchema);
    return db;
};
exports.default = schemas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxPQUFPLEdBQUcsVUFBQyxFQUFZO0lBQzNCLElBQU0scUJBQXFCLEdBQUcsMFpBYTNCLENBQUM7SUFFSixFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFOUIsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCJzcWxpdGUzXCI7XG5cbmNvbnN0IHNjaGVtYXMgPSAoZGI6IERhdGFiYXNlKTogRGF0YWJhc2UgPT4ge1xuICBjb25zdCBjcmVhdGVSaWRlVGFibGVTY2hlbWEgPSBgXG4gICAgICAgIENSRUFURSBUQUJMRSBSaWRlc1xuICAgICAgICAoXG4gICAgICAgIHJpZGVJRCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsXG4gICAgICAgIHN0YXJ0TGF0IERFQ0lNQUwgTk9UIE5VTEwsXG4gICAgICAgIHN0YXJ0TG9uZyBERUNJTUFMIE5PVCBOVUxMLFxuICAgICAgICBlbmRMYXQgREVDSU1BTCBOT1QgTlVMTCxcbiAgICAgICAgZW5kTG9uZyBERUNJTUFMIE5PVCBOVUxMLFxuICAgICAgICByaWRlck5hbWUgVEVYVCBOT1QgTlVMTCxcbiAgICAgICAgZHJpdmVyTmFtZSBURVhUIE5PVCBOVUxMLFxuICAgICAgICBkcml2ZXJWZWhpY2xlIFRFWFQgTk9UIE5VTEwsXG4gICAgICAgIGNyZWF0ZWQgREFURVRJTUUgZGVmYXVsdCBDVVJSRU5UX1RJTUVTVEFNUFxuICAgICAgICApXG4gICAgYDtcblxuICBkYi5ydW4oY3JlYXRlUmlkZVRhYmxlU2NoZW1hKTtcblxuICByZXR1cm4gZGI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlbWFzO1xuIl19